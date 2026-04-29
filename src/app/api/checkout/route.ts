import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { plan } = await request.json();
    
    if (!plan || (plan !== 'AI_BASIC' && plan !== 'AI_PRO')) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });
    }

    // Get user from database
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Check if user already has a Stripe customer ID
    let customerId = '';
    const existingSubscription = await prisma.subscription.findFirst({
      where: { userId: user.id },
    });

    if (existingSubscription?.stripeCustomerId) {
      customerId = existingSubscription.stripeCustomerId;
    } else {
      // Create a new Stripe customer
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: {
          userId: user.id,
          clerkId: userId,
        },
      });
      customerId = customer.id;

      // Save customer ID to database
      if (existingSubscription) {
        // Update existing subscription with stripeCustomerId
        await prisma.subscription.update({
          where: { id: existingSubscription.id },
          data: { stripeCustomerId: customerId },
        });
      } else {
        // Create new subscription
        await prisma.subscription.create({
          data: {
            userId: user.id,
            stripeCustomerId: customerId,
            plan: plan === 'AI_BASIC' ? 'AI_BASIC' : 'AI_PRO',
            status: 'TRIAL',
          },
        });
      }
    }

    // Create checkout session
    const priceId = plan === 'AI_BASIC'
      ? 'price_1TR3jjDWBnME1L32Fga5apaE'  // AI Basic: $10/month
      : 'price_1TR3k6DWBnME1L32uhDuECl2'; // AI Pro: $19/month

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pro?canceled=true`,
      metadata: {
        userId: user.id,
        plan,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}