import express from 'express';
import userController from './controllers/products.controller';

const app = express();

app.use(express.json());

app.use('/products', userController.insertProduct);

export default app;
