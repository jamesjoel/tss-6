// const express = require("express");
import express from 'express';
import AllRoutes from './routes/AllRoutes.js';
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use(AllRoutes);
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server Ruuning With Port : ", port);
})