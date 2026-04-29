import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature')!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    console.error('Webhook signature verification failed:', error.message);
    return NextResponse.json(
      { error: `Webhook Error: ${error.message}` },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as any;
        await handleCheckoutSessionCompleted(session);
        break;
      }
      case 'customer.subscription.updated': {
        const subscription = event.data.object as any;
        await handleSubscriptionUpdated(subscription);
        break;
      }
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as any;
        await handleSubscriptionDeleted(subscription);
        break;
      }
      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as any;
        await handleInvoicePaymentSucceeded(invoice);
        break;
      }
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook handler error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function handleCheckoutSessionCompleted(session: any) {
  const { userId, plan } = session.metadata;
  const stripeCustomerId = session.customer;
  const stripeSubscriptionId = session.subscription;

  if (!userId || !plan) {
    console.error('Missing metadata in session:', session.id);
    return;
  }

  // Find existing subscription
  const existingSubscription = await prisma.subscription.findFirst({
    where: { userId },
  });

  // Update or create subscription in database
  if (existingSubscription) {
    await prisma.subscription.update({
      where: { id: existingSubscription.id },
      data: {
        stripeCustomerId,
        stripeSubscriptionId,
        plan: plan as any,
        status: 'ACTIVE',
        currentPeriodStart: new Date(session.created * 1000),
        currentPeriodEnd: new Date(session.expires_at * 1000),
      },
    });
  } else {
    await prisma.subscription.create({
      data: {
        userId,
        stripeCustomerId,
        stripeSubscriptionId,
        plan: plan as any,
        status: 'ACTIVE',
        currentPeriodStart: new Date(session.created * 1000),
        currentPeriodEnd: new Date(session.expires_at * 1000),
      },
    });
  }

  // Create payment record
  await prisma.payment.create({
    data: {
      userId,
      stripePaymentIntentId: session.payment_intent,
      amount: session.amount_total,
      currency: session.currency,
      status: 'succeeded',
    },
  });

  console.log(`Subscription activated for user ${userId}, plan: ${plan}`);
}

async function handleSubscriptionUpdated(subscription: any) {
  const stripeSubscriptionId = subscription.id;
  const stripeCustomerId = subscription.customer;

  const dbSubscription = await prisma.subscription.findFirst({
    where: { stripeSubscriptionId },
  });

  if (!dbSubscription) {
    console.error('Subscription not found:', stripeSubscriptionId);
    return;
  }

  await prisma.subscription.update({
    where: { id: dbSubscription.id },
    data: {
      status: subscription.status === 'active' ? 'ACTIVE' : 'CANCELED',
      currentPeriodStart: new Date(subscription.current_period_start * 1000),
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
      cancelAtPeriodEnd: subscription.cancel_at_period_end,
    },
  });
}

async function handleSubscriptionDeleted(subscription: any) {
  const stripeSubscriptionId = subscription.id;

  const dbSubscription = await prisma.subscription.findFirst({
    where: { stripeSubscriptionId },
  });

  if (!dbSubscription) {
    console.error('Subscription not found for deletion:', stripeSubscriptionId);
    return;
  }

  await prisma.subscription.update({
    where: { id: dbSubscription.id },
    data: {
      status: 'CANCELED',
      stripeSubscriptionId: null,
    },
  });
}

async function handleInvoicePaymentSucceeded(invoice: any) {
  const stripeCustomerId = invoice.customer;
  const amount = invoice.amount_paid;
  const currency = invoice.currency;
  const stripePaymentIntentId = invoice.payment_intent;

  const subscription = await prisma.subscription.findFirst({
    where: { stripeCustomerId },
  });

  if (!subscription) {
    console.error('Subscription not found for invoice:', stripeCustomerId);
    return;
  }

  // Create payment record for recurring payment
  await prisma.payment.create({
    data: {
      userId: subscription.userId,
      stripePaymentIntentId,
      amount,
      currency,
      status: 'succeeded',
      subscriptionId: subscription.id,
    },
  });

  console.log(`Recurring payment recorded for user ${subscription.userId}`);
}