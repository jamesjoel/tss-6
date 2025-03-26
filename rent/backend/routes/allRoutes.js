import express from 'express';
import OwnerRoutes from './OwnerRoutes.js'
import SeekerRoutes from './SeekerRoutes.js'
import SeekerAuthRoutes from './SeekerAuthRoutes.js'
import OwnerAuthRoute from './OwnerAuthRoute.js'
import AdminAuthRoute from './AdminAuthRoute.js'
let routes = express.Router();



routes.use("/api/v1/owner", OwnerRoutes);
routes.use("/api/v1/seeker", SeekerRoutes);
routes.use("/api/v1/seekerauth", SeekerAuthRoutes);
routes.use("/api/v1/ownerauth", OwnerAuthRoute);
routes.use("/api/v1/adminauth", AdminAuthRoute);



export default routes;
