import express from 'express'
import {SaveFaculty, UpdateFaculty, FetchFaculty, FetchFacultyById, DeleteFaculty} from '../controllers/FacultyController.js'
let routes = express.Router();

routes.get("/", FetchFaculty);
routes.get("/:id", FetchFacultyById);
routes.post("/", SaveFaculty);
routes.put("/:id", UpdateFaculty);
routes.delete("/:id", DeleteFaculty);

export default routes;