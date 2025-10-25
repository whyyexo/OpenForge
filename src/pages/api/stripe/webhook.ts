import { NextApiRequest, NextApiResponse } from 'next';
import { stripe, PLAN_MAPPING } from '../../../lib/stripe';
import { supabase } from '../../../lib/supabase';
import Stripe from 'stripe';

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'] as string;
  const body = req.body;

  let event: Stripe.Event;

  try {
    // Vérifier la signature du webhook
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).json({ error: 'Invalid signature' });
  }

  try {
    await handleWebhookEvent(event);
    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Webhook handler error:', error);
    res.status(500).json({ error: 'Webhook handler failed' });
  }
}

async function handleWebhookEvent(event: Stripe.Event) {
  console.log(`Processing webhook event: ${event.type}`);

  switch (event.type) {
    case 'checkout.session.completed':
      await handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session);
      break;

    case 'invoice.paid':
      await handleInvoicePaid(event.data.object as Stripe.Invoice);
      break;

    case 'invoice.payment_failed':
      await handleInvoicePaymentFailed(event.data.object as Stripe.Invoice);
      break;

    case 'customer.subscription.created':
      await handleSubscriptionCreated(event.data.object as Stripe.Subscription);
      break;

    case 'customer.subscription.updated':
      await handleSubscriptionUpdated(event.data.object as Stripe.Subscription);
      break;

    case 'customer.subscription.deleted':
      await handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  if (session.mode !== 'subscription' || session.payment_status !== 'paid') {
    return;
  }

  const userId = session.metadata?.user_id;
  const priceId = session.metadata?.price_id;

  if (!userId || !priceId) {
    console.error('Missing metadata in checkout session:', session.id);
    return;
  }

  // Vérifier si la transaction existe déjà (idempotence)
  const { data: existingTransaction } = await supabase
    .from('transactions')
    .select('id')
    .eq('stripe_id', session.id)
    .single();

  if (existingTransaction) {
    console.log('Transaction already processed:', session.id);
    return;
  }

  const plan = PLAN_MAPPING[priceId as keyof typeof PLAN_MAPPING];
  if (!plan) {
    console.error('Unknown price ID:', priceId);
    return;
  }

  // Mettre à jour le plan de l'utilisateur
  await supabase
    .from('user_profiles')
    .update({ subscription_plan: plan })
    .eq('user_id', userId);

  // Enregistrer la transaction
  await supabase
    .from('transactions')
    .insert({
      user_id: userId,
      stripe_id: session.id,
      amount_cents: session.amount_total || 0,
      currency: session.currency || 'usd',
      plan: plan,
      status: 'completed',
    });

  // Audit log
  await supabase
    .from('subscription_audit_log')
    .insert({
      user_id: userId,
      old_plan: 'Lunch',
      new_plan: plan,
      stripe_event_id: session.id,
    });

  console.log(`Updated user ${userId} to plan ${plan}`);
}

async function handleInvoicePaid(invoice: Stripe.Invoice) {
  if (!invoice.subscription) return;

  const subscription = await stripe.subscriptions.retrieve(invoice.subscription as string);
  const customerId = subscription.customer as string;

  // Récupérer l'utilisateur par customer_id
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('user_id, subscription_plan')
    .eq('stripe_customer_id', customerId)
    .single();

  if (!profile) return;

  const priceId = subscription.items.data[0]?.price.id;
  const plan = PLAN_MAPPING[priceId as keyof typeof PLAN_MAPPING];

  if (!plan) return;

  // Vérifier si la transaction existe déjà
  const { data: existingTransaction } = await supabase
    .from('transactions')
    .select('id')
    .eq('stripe_id', invoice.id)
    .single();

  if (existingTransaction) return;

  // Mettre à jour le plan
  await supabase
    .from('user_profiles')
    .update({ subscription_plan: plan })
    .eq('user_id', profile.user_id);

  // Enregistrer la transaction
  await supabase
    .from('transactions')
    .insert({
      user_id: profile.user_id,
      stripe_id: invoice.id,
      amount_cents: invoice.amount_paid,
      currency: invoice.currency,
      plan: plan,
      status: 'completed',
    });

  console.log(`Invoice paid for user ${profile.user_id}, plan: ${plan}`);
}

async function handleInvoicePaymentFailed(invoice: Stripe.Invoice) {
  if (!invoice.subscription) return;

  const subscription = await stripe.subscriptions.retrieve(invoice.subscription as string);
  const customerId = subscription.customer as string;

  // Récupérer l'utilisateur
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('user_id')
    .eq('stripe_customer_id', customerId)
    .single();

  if (!profile) return;

  // Downgrader à Lunch
  await supabase
    .from('user_profiles')
    .update({ subscription_plan: 'Lunch' })
    .eq('user_id', profile.user_id);

  console.log(`Payment failed for user ${profile.user_id}, downgraded to Lunch`);
}

async function handleSubscriptionCreated(subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string;
  const priceId = subscription.items.data[0]?.price.id;
  const plan = PLAN_MAPPING[priceId as keyof typeof PLAN_MAPPING];

  if (!plan) return;

  // Récupérer l'utilisateur
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('user_id')
    .eq('stripe_customer_id', customerId)
    .single();

  if (!profile) return;

  // Mettre à jour le plan
  await supabase
    .from('user_profiles')
    .update({ subscription_plan: plan })
    .eq('user_id', profile.user_id);

  console.log(`Subscription created for user ${profile.user_id}, plan: ${plan}`);
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string;
  const priceId = subscription.items.data[0]?.price.id;
  const plan = PLAN_MAPPING[priceId as keyof typeof PLAN_MAPPING];

  if (!plan) return;

  // Récupérer l'utilisateur
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('user_id')
    .eq('stripe_customer_id', customerId)
    .single();

  if (!profile) return;

  // Mettre à jour le plan
  await supabase
    .from('user_profiles')
    .update({ subscription_plan: plan })
    .eq('user_id', profile.user_id);

  console.log(`Subscription updated for user ${profile.user_id}, plan: ${plan}`);
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string;

  // Récupérer l'utilisateur
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('user_id')
    .eq('stripe_customer_id', customerId)
    .single();

  if (!profile) return;

  // Downgrader à Lunch
  await supabase
    .from('user_profiles')
    .update({ subscription_plan: 'Lunch' })
    .eq('user_id', profile.user_id);

  console.log(`Subscription deleted for user ${profile.user_id}, downgraded to Lunch`);
}
