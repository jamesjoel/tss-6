import express from 'express';
import { SaveProperty, getAllProperty, getAllPropertyById, getAllPropertyByOwner, getAllPropertyWithOwner } from '../controllers/PropertyController.js';
let routes = express.Router();

routes.post("/", SaveProperty);

routes.get("/", getAllProperty);

routes.get("/owner", getAllPropertyByOwner)

routes.get("/withowner", getAllPropertyWithOwner)

routes.get("/find/:id", getAllPropertyById);

export default routes;