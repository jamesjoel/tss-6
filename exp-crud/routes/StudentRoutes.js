import express from 'express';
import {fetchAllStudent, fetchStudentById, updateStudent, deleteStudent, saveStudent} from '../controllers/StudentController.js'

let routes = express.Router();

routes.get("/", fetchAllStudent);

routes.get("/:id", fetchStudentById);

routes.post("/", saveStudent);

routes.delete("/:id", deleteStudent);

routes.put("/:id", updateStudent);

export default routes;
