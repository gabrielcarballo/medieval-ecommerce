import orderModels from '../models/orders.models';

async function listAllOrders() {
  const data = await orderModels.listAllOrders();

  return data;
}

export default {
  listAllOrders,
};