import express from 'express';
import { fetchCity, fetchState, fetchCityByState } from '../controllers/CityController.js';
let routes = express.Router();

routes.get("/", fetchCity);
routes.get("/state", fetchState);

routes.get("/citybystate/:a", fetchCityByState);
// localhost:3000/api/v1/city/state

export default routes;