import { RowDataPacket } from 'mysql2';
import connection from './connection';

async function listAllOrders() {
  const [allOrdersQuery] = await connection.execute<RowDataPacket[]>(
    `SELECT 
    A.id, A.user_id AS userId, JSON_ARRAYAGG(B.id) AS productsIds
FROM
    Trybesmith.orders AS A
        LEFT JOIN
    Trybesmith.products AS B ON A.id = B.order_id
GROUP BY A.id , A.user_id`,
  );

  return allOrdersQuery;
}

export default {
  listAllOrders,
};