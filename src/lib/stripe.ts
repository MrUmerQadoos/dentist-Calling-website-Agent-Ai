import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-04-22.dahlia',
  typescript: true,
});

// Price IDs for different plans (you need to create these in Stripe dashboard)
export const PRICE_IDS = {
  AI_BASIC: 'price_1TR3jjDWBnME1L32Fga5apaE', // $10/month
  AI_PRO: 'price_1TR3k6DWBnME1L32uhDuECl2',   // $19/month
};

// Helper to get price ID from plan name
export function getPriceId(plan: 'AI_BASIC' | 'AI_PRO'): string {
  return PRICE_IDS[plan];
}