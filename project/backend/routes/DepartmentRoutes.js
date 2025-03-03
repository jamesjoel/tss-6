import express from 'express';
import { fetchDepartment } from '../controllers/DepartmentController.js';

let routes = express.Router();

routes.get("/", fetchDepartment)

export default routes;