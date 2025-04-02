import express from 'express';
import { SaveProperty, getAllProperty } from '../controllers/PropertyController.js';
let routes = express.Router();

routes.post("/", SaveProperty);

routes.get("/", getAllProperty);

export default routes;