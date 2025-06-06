import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';
const socket = io("http://localhost:3000");

const App2 = () => {

    let [txt, setTxt] = useState("");
    let [allMsg, setAllMsg] = useState([]);

    let send = ()=>{
        socket.emit("send", txt);
    }

    useEffect(()=>{
        socket.on("resend", (data)=>{
            setAllMsg(oldValues=>[...oldValues, data]);
        })
    },[])

  return (
    <div style={{margin : "50px auto", width : "85%", fontSize : "20px"}}>
        <h1>Welcome</h1>
        <input type='text' value={txt} onChange={(e)=>setTxt(e.target.value)} />
        <button onClick={send}>OK</button>
        <h3>All Msg</h3>
        <ul>
            {
                allMsg.map(item=><li>{item}</li>)
            }
        </ul>
    </div>
  )
}

export default App2