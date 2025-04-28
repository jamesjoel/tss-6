import express from 'express'
import { SeekerProfile, EditSeekerProfile } from '../controllers/SeekerProfileController.js';

let routes = express.Router();

routes.get("/", SeekerProfile);
routes.put("/", EditSeekerProfile)

export default routes;