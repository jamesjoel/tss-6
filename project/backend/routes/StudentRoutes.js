import express from 'express';
import {fetchStudent, saveStudent} from '../controllers/StudentController.js'
let routes = express.Router();

routes.get("/", fetchStudent)
routes.post("/", saveStudent);

export default routes;
