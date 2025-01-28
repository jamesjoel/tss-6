import express from 'express';
import {getAllProduct, addProduct} from '../controllers/ProductController.js'
const routes = express.Router();

routes.get("/", getAllProduct);
routes.post("/", addProduct)

export default routes;