import express from 'express';
import { fetchAllUser, saveUser, fetchUserByCity, deleteById } from '../controllers/UserController.js';
const routes = express.Router();

routes.get("/", fetchAllUser);
routes.get("/:city", fetchUserByCity)
routes.post("/", saveUser)
routes.delete("/:id", deleteById);

export default routes;