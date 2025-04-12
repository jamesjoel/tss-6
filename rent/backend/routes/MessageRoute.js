import express from 'express';
import { saveMessage } from '../controllers/MessageController.js';
let routes = express.Router();

routes.post("/", saveMessage);

export default routes;