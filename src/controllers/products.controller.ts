import { Request, Response } from 'express';
import productService from '../services/products.service';
import productValidation from '../validations/productValidation';
import errorMap from '../middlewares/errorMap';

async function insertProduct(req: Request, res: Response) {
  const { name, amount } = req.body;

  const { message, type } = productValidation(name, amount);
  if (type) {
    return res.status(errorMap(type)).json({ message });
  }
  const product = await productService.insertProduct(name, amount);

  res.status(201).json(product);
}

export default {
  insertProduct,
};