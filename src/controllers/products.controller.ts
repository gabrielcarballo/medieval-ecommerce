import { Request, Response } from 'express';
import productService from '../services/products.service';

async function insertProduct(req: Request, res: Response) {
  const { name, amount } = req.body;

  const product = await productService.insertProduct(name, amount);
  console.log(product);

  res.status(201).json(product);
}

export default {
  insertProduct,
};