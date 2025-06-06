import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import http from 'http';
import mongoose from 'mongoose'

mongoose.connect("mongodb://0.0.0.0:27017/tss6_30")

let ChatSchema = mongoose.Schema({
    name : String
})
let ChatModel = mongoose.model("chat", ChatSchema);

let MsgSchema = mongoose.Schema({
  name : String,
  msg : String
})
let MsgModel = mongoose.model("message", MsgSchema);

const app = express();
const server = http.createServer(app)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const io = new Server(server,{
    cors : {
        origin :"http://localhost:5173",
        methods : ["GET", "POST", "PUT", "DELETE"]
    }
})
let userArr = [];
let userObj = {};

io.on("connection", async(socket)=>{
    let result = await MsgModel.find();
    io.emit("allmsg", result)

    
    socket.on("new user connected", async(id)=>{
        userObj[id] = socket.id;
     if(!userArr.includes(id)){

       userArr.push(id);
     }
    const records = await ChatModel.find({ _id : userArr });
    io.emit("allUser", records);
    
    })
    socket.on("sendtoserver", async(obj)=>{
      await MsgModel.create(obj);
      let result = await MsgModel.find();
      io.emit("allmsg", result)
    })


    socket.on("disconnect", async()=>{
        const userid = Object.keys(userObj).find(key => userObj[key] === socket.id);
        userArr = userArr.filter(val => val != userid);
        delete userObj[userid];
        const records = await ChatModel.find({ _id : userArr });
        io.emit("allUser", records);
    })    
})



app.post("/api/v1/user", async(req, res)=>{
    let data = await ChatModel.find({name : req.body.name});
    if(data.length>=1){

        res.send(data[0]);
    }else{

        let result = await ChatModel.create(req.body);
        res.send(result);
    }
})

app.get("/api/v1/user/:id", async(req, res)=>{

    let data = await ChatModel.find({_id : req.params.id});
    res.send(data[0]);
    
})
// on, emit




let port = process.env.PORT || 3000;
// app.listen(port, ()=>{
//     console.log("Server Running");
// })

server.listen(port, ()=>{
    console.log("Server Running");
})

/*
   const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose")
const cors = require("cors")

mongoose.connect("mongodb://0.0.0.0:27017/chatdb").then(()=>console.log("connected")).catch((e)=>console.log("NOT ", e))

let Chat = mongoose.model("chat", mongoose.Schema({
  name : String
}))
let Message = mongoose.model("message", mongoose.Schema({
  userid : {type : mongoose.Schema.Types.ObjectId, ref : "chat"},
  message : String
}))



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});
let userArr = [];
let socketIdObj = {};

io.on("connection", (socket) => {
  socket.on("message", (message) => {
    io.emit("message", message);
  });
  socket.on("getAllMsg", async()=>{
    let allMsg = await Message.find().populate("userid");
    io.emit("recAllMsg", allMsg);
  })
  socket.on("new-user", async(id)=>{
    socketIdObj[id] = socket.id;
    if(!userArr.includes(id))
      userArr.push(id);
    const records = await Chat.find({ _id : userArr });
    io.emit("allUser", records);
  })

  socket.on("disconnect", async() => {
      const userid = Object.keys(socketIdObj).find(key => socketIdObj[key] === socket.id);
      userArr = userArr.filter(val => val != userid);
      delete socketIdObj[userid];
      const records = await Chat.find({ _id : userArr });
      io.emit("allUser", records);
  });
});

app.post("/send/:id", async(req, res)=>{
  await Message.create({userid : req.params.id, message : req.body.msg});
  res.send({success:true});
  
})

app.post("/user", async(req, res)=>{
   let getData = await Chat.find({name : req.body.name});
   if(getData.length == 0){
     let result = await Chat.create(req.body);

      res.send(result);
   }else{
    res.send(getData[0]);
   }
})

app.get("/user/:id", async(req, res)=>{
  let result = await Chat.find({_id : req.params.id});
  res.send(result[0])
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


*/