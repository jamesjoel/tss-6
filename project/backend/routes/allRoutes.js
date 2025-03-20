import express from 'express';
import StudentRoutes from './StudentRoutes.js'
import CityRoutes from './CityRoutes.js'
import DepartmentRoutes from './DepartmentRoutes.js'
import FacultyRoutes from './FacultyRoutes.js'
// import TeacherRoute from './TeacherRoute.js'

let routes = express.Router();


routes.use("/api/v1/city", CityRoutes);
routes.use("/api/v1/department", DepartmentRoutes);
routes.use("/api/v1/student", StudentRoutes);
routes.use("/api/v1/faculty", FacultyRoutes);
// routes.use("/api/v1/teacher", TeacherRoute)

export default routes;
