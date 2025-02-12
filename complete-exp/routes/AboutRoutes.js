import express from 'express';
import { demo } from '../controllers/AboutController.js';

let routes = express.Router();

routes.get("/:a/:b", demo);

export default routes;