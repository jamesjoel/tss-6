import express from 'express';
import { fetchAllUser, saveUser } from '../controllers/UserController.js';
const routes = express.Router();

routes.get("/", fetchAllUser);
routes.post("/", saveUser)

export default routes;