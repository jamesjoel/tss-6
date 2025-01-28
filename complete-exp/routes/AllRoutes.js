import express from 'express';
import ProductRoutes from './ProductRoutes.js'
import UserRoutes from './UserRoutes.js'
const routes = express.Router();

routes.use("/api/v1/product", ProductRoutes);
routes.use("/api/v1/user", UserRoutes);

export default routes;