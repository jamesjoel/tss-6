import express from 'express'
import { SeekerProfile } from '../controllers/SeekerProfileController.js';

let routes = express.Router();

routes.get("/", SeekerProfile);

export default routes;