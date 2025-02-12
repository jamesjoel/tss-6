import express from 'express'
import AllRoutes from './routes/AllRoutes.js'
let app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(AllRoutes)


let port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("Server Running with port ", port);
})