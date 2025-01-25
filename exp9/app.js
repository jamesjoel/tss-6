// const express = require("express");
import express from 'express';
import {x, z} from './helper/index.js'

const app = express();

app.listen(3000, ()=>{
    console.log(z)
    console.log(x)
    console.log("server running");
})