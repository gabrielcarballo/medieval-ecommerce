import express from 'express';
import userController from './controllers/products.controller';

const app = express();

app.use(express.json());

app.post('/products', userController.insertProduct);
app.get('/products', userController.getAllProducts);

export default app;
