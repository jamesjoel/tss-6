import express from 'express';
import {getAllProduct, addProduct, getAllProductByCategory, deleteById, updateById} from '../controllers/ProductController.js'
const routes = express.Router();
// :3000/api/v1/product/
routes.get("/", getAllProduct);
routes.get("/:a", getAllProductByCategory);
routes.delete("/:id", deleteById);
routes.put("/:id", updateById);

routes.post("/", addProduct)

export default routes;