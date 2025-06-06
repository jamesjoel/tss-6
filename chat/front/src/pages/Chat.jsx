import React from 'react'
import './Chat.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import io from 'socket.io-client';
const socket = io("http://localhost:3000");


const Chat = () => {
  let param = useParams();
  let [msg, setMsg] = useState("")
  let [onlineUser, setOnlineUser] = useState();
  let [allUserArr, setAllUserArr] = useState([]);
  let [allMsg, setAllMsg] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/user/"+param.id)
    .then(response=>{
      // console.log(response.data)
      setOnlineUser(response.data);
      
    })
  },[])

  useEffect(()=>{
    socket.emit("new user connected", param.id);
    socket.on("allUser", (data)=>{
      setAllUserArr(data);
    })
    socket.on("allmsg", (data)=>{
      console.log(data)
      setAllMsg(data)
    })

  },[])


  let send = ()=>{
    let obj = { name : onlineUser.name, msg : msg }
    socket.emit("sendtoserver", obj);
  }

 

  return (
    <>
    
    <div>
      {/* Header */}
      <div className="chat-header text-center">Open Chat Box</div>

      <div className="container-fluid">
        <div className="row">
          
          <div className="col-md-3 user-list">
            <h5>Online User ({allUserArr.length})</h5>
            <ul className="list-unstyled mt-4">
              {
                allUserArr.map(item=>{
                  return(
                    <li className="mb-3">{item.name}</li>
                  )
                })
              }
              
            </ul>
          </div>

          
          <div className="col-md-9 d-flex flex-column chat-box">
          
            <div className="d-flex align-items-center mb-3">
              {/* <img src="https://via.placeholder.com/40" className="rounded-circle me-2" alt="User" /> */}
              <div>
                <strong>{onlineUser ? onlineUser.name : ''}</strong><br />
                <small className="text-success">Online</small>
              </div>
            </div>

            
            <div className="chat-container flex-grow-1">
              {
                allMsg.map(item=>{
                  return(
                    <div className={item.name == onlineUser.name ?  "message-right" : "message-left"}>
                      {item.msg}
                     <br /><span className="tag">{item.name}</span>
                  </div>    
                  )
                })
              }
              
            </div>

            
            <div className="mt-auto">
              <form className="d-flex p-2 bg-light rounded">
                <input value={msg} onChange={(e)=>setMsg(e.target.value)} type="text" className="form-control me-2" placeholder="Type a message" />
                <button onClick={send} className="btn btn-dark" type="button">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
    </>
  )
}

export default Chat


/*

import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { useFetcher, useParams } from "react-router-dom";
import axios from "axios";
import img from "./assets/images/avatar.png";
const socket = io("http://localhost:5000");

const Chatting = () => {
  const params = useParams();
  const [user, setUser] = useState({});
  const [allUser, setAllUser] = useState([]);
  const [msg, setMsg] = useState("");
  const [allMsg, setAllMsg] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/user/" + params.id).then((response) => {
      setUser(response.data);
    });
  }, []);

  useEffect(() => {
    socket.emit("new-user", params.id);
    socket.on("allUser", (data) => {
      console.log(data);
      setAllUser(data);
    });
    socket.on("recAllMsg", (data) => {
      console.log(data);
      setAllMsg(data);
    });
    getAllMsg();
  }, []);

  let getAllMsg = () => {
    socket.emit("getAllMsg");
  };

  const send = () => {
    axios
      .post("http://localhost:5000/send/" + params.id, { msg: msg })
      .then((response) => {
        // console.log(response.data);
        setMsg("");
        getAllMsg();
      });
  };

  return (
    <>
      <div className="w-full h-auto my-2 py-4 bg-[#271A33] rounded-lg">
        <h4 className="text-white text-2xl">Open Chat Box</h4>
      </div>
      <div className="flex h-140">
        <div className="w-1/4 bg-[#271A33] me-2 text-white rounded-lg shadow-lg p-4 overflow-y-auto">
          <h2 className="text-2xl text-white font-bold mb-4">
            Online User ({allUser.length})
          </h2>
          <ul className="space-y-3">
            {allUser.map((item) => {
              return (
                <li
                  key={item._id}
                  className="flex items-center space-x-3 p-2 hover:bg-gray-100 hover:text-black rounded cursor-pointer"
                >
                  <img src={img} className="rounded-full w-10 h-10" />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="p-4 bg-[#8174A0] flex rounded-t-lg text-white items-center space-x-3">
            <img
              src="https://i.pravatar.cc/40"
              className="rounded-full w-10 h-10"
            />
            <div>
              <h2 className="font-semibold">{user.name}</h2>
              <p className="text-sm ">Online</p>
            </div>
          </div>

          <div className="flex-1 p-6 space-y-4  overflow-y-auto bg-[#E5D9F2]">
            {
              allMsg.map(item=><div key={item._id}>
                {
                  item.userid._id == params.id
                  ?
                  <SenderMsgBox data={item}/>
                  :
                  <RecMsgBox data={item}/>
                }
              </div>)
            }

            
            
          </div>



          <div className="p-4 bg-[#E5D9F2] rounded-b-lg">
            <div className="flex items-center  space-x-3">
              <input
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                type="text"
                placeholder="Type a message"
                className="flex-1 rounded-md bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={send}
                className="bg-[#271A33] hover:bg-[#09060c] cursor-pointer text-white px-4 py-2 rounded-md"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatting;
const SenderMsgBox = ({data})=>{
  return(
  <div className="flex items-start space-x-2 justify-end">
              <div className="flex items-start space-x-2">
              <div class="relative min-w-64 max-w-2xl h-auto border border-gray-300 rounded-lg bg-[#9949d6]">
                <div class="p-4">
                  <p class="text-sm text-white">{data.message}</p>
                </div>

                <span class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full shadow">
                  You
                </span>
              </div>
            </div>
            </div>
  )
}
const RecMsgBox = ({data})=>{
  return(
  <div className="flex items-start space-x-2">
              <div class="relative min-w-64 max-w-2xl h-auto border border-gray-300 rounded-lg bg-white">
                <div class="p-4">
                  <p class="text-sm text-gray-600">{data.message}</p>
                </div>

                <span class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full shadow">
                  {data.userid.name}
                </span>
              </div>
            </div>
  )
}

*/