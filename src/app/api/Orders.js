import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();
const FLEETBASE_API_KEY = 'flb_live_j9wdptug9pkENlyU87lg';
const FLEETBASE_API_URL = 'http://localhost:8000/v1';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { customerName, customerPhone, pickupAddress, dropoffAddress } = req.body;

    try {
      // Create order in Fleetbase
      const fleetbaseResponse = await axios.post(
        `${FLEETBASE_API_URL}/orders`,
        { customer_name: customerName, customer_phone: customerPhone, pickup_address: pickupAddress, dropoff_address: dropoffAddress },
        {
          headers: {
            Authorization: `Bearer flb_live_kQK8TAKADZ6rR1sZXRld`,
            'Content-Type': 'application/json',
          },
        }
      );

      const fleetbaseOrder = fleetbaseResponse.data.data;

      // Save order to local database using Prisma
      const localOrder = await prisma.order.create({
        data: {
          customerName: fleetbaseOrder.customer_name,
          customerPhone: fleetbaseOrder.customer_phone,
          pickupAddress: fleetbaseOrder.pickup_address,
          dropoffAddress: fleetbaseOrder.dropoff_address,
        },
      });

      res.status(201).json({ fleetbaseOrder, localOrder });
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ error: 'Failed to create order' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}