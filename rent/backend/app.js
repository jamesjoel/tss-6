import express from 'express';
import allRoutes from './routes/allRoutes.js';
import cors from 'cors'
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended : true }));
app.use(cors());

// app.get("/demo", (req, res)=>{
//     console.log("req.body-----",req.body)
//     console.log("req.params-----",req.params)
//     console.log("req.file-----",req.files)
//     console.log("req.cookie-----",req.cookies)
//     console.log("req.headers-----",req.headers)
// })

app.use(allRoutes);
const port = process.env.PORT;
app.listen(port, ()=>{
    console.log("Server Running with port ", port);
})