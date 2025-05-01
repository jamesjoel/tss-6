import express from 'express'
import { SeekerProfile, EditSeekerProfile, updatePass, getOtp } from '../controllers/SeekerProfileController.js';

let routes = express.Router();

routes.get("/", SeekerProfile);
routes.put("/", EditSeekerProfile)
routes.post("/updatepass", updatePass);
routes.post("/getotp", getOtp);

export default routes;