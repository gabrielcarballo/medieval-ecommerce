import { Request, Response } from 'express';
import orderService from '../services/orders.services';

async function listAllOrders(req: Request, res: Response) {
  const data = await orderService.listAllOrders();

  if (data) return res.status(200).json(data);
  return res.status(500).json({ message: 'Database error response' });
}

export default {
  listAllOrders,
};