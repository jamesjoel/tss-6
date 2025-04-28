import React, { useState } from 'react'
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyDEJt6rONJ2E4PvmP96cPuA5mgwjrKPxu8" });
const App5 = () => {
    let [ans, setAns] = useState("");
    let [showLoader, setShowLoader] = useState(false)
    let [que, setQue] = useState("");
    const getData = async()=>{
        setShowLoader(true);
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: que,
        });
        if(response){
            setShowLoader(false)
            setAns(response.text);
            setQue("")

        }
    }
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-8 offset-md-2">
                
                <textarea value={que} onChange={(e)=>setQue(e.target.value)} className='form-control' placeholder='Type Your Query Here...'></textarea>
                <br />
                <button onClick={getData} className='btn btn-success'>Get Data {showLoader ? <span className='spinner-border spinner-border-sm'></span> : ''} </button>
            </div>
            <div className='col-md-8 offset-md-2 mt-4'>
                <h4>Your Result</h4>
                <div className='alert alert-primary'>{ans}</div>
            </div>
        </div>
    </div>
  )
}

export default App5