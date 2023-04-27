import productsModel from '../models/products.model';

async function insertProduct(name: string, amount: string) {
  const product = await productsModel.insertProduct(name, amount);
  return product;
}

async function getAllProducts() {
  const allProducts = await productsModel.getAllProducts();  
  return allProducts;
}

export default {
  insertProduct,
  getAllProducts,
};