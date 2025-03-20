import express from 'express';
import OwnerRoutes from './OwnerRoutes.js'
import SeekerRoutes from './SeekerRoutes.js'
import SeekerAuthRoutes from './SeekerAuthRoutes.js'
let routes = express.Router();



routes.use("/api/v1/owner", OwnerRoutes);
routes.use("/api/v1/seeker", SeekerRoutes);
routes.use("/api/v1/seekerauth", SeekerAuthRoutes);



export default routes;
