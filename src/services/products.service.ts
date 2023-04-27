import productsModel from '../models/products.model';

async function insertProduct(name: string, amount: string) {
  const product = await productsModel.insertProduct(name, amount);
  return product;
}

export default {
  insertProduct,
};