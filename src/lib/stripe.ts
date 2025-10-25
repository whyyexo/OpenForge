import Stripe from 'stripe';

// Configuration Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

// Price IDs mapping (à remplacer par vos vrais Price IDs)
export const PRICE_IDS = {
  BOOST: process.env.STRIPE_BOOST_PRICE_ID || 'price_boost_placeholder',
  SCALE: process.env.STRIPE_SCALE_PRICE_ID || 'price_scale_placeholder',
} as const;

// Plan mapping
export const PLAN_MAPPING = {
  [PRICE_IDS.BOOST]: 'Boost',
  [PRICE_IDS.SCALE]: 'Scale',
} as const;

export { stripe };
