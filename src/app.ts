import express from 'express';
import productController from './controllers/products.controller';
import userController from './controllers/user.controller';

const app = express();

app.use(express.json());

app.post('/products', productController.insertProduct);
app.get('/products', productController.getAllProducts);
app.post('/users', userController.signInUser);

export default app;
