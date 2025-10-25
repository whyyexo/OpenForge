import { NextApiRequest, NextApiResponse } from 'next';
import { PRICE_IDS } from '../../../lib/stripe';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const prices = [
      {
        id: PRICE_IDS.BOOST,
        name: 'Boost Plan',
        amount: 2000, // $20.00 in cents
        currency: 'usd',
        interval: 'month',
        description: 'Ideal for growing teams',
      },
      {
        id: PRICE_IDS.SCALE,
        name: 'Scale Plan',
        amount: 3500, // $35.00 in cents
        currency: 'usd',
        interval: 'month',
        description: 'For enterprise teams',
      },
    ];

    res.status(200).json({ prices });
  } catch (error) {
    console.error('Prices API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
