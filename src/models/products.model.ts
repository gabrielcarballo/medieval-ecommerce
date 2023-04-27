import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Product } from '../types/Products';

async function getAllProducts() {
  const [allProducts] = await connection.execute<RowDataPacket[]>(
    'SELECT id, name, amount FROM Trybesmith.products',
  );
  return allProducts;
}

async function insertProduct(name: string, amount: string) {
  const [{ insertId: id }] = await
  connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const data: Product = { id, name, amount };
  return data;
}

export default {
  insertProduct,
  getAllProducts,
};