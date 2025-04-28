import React, { useState } from 'react'
import { GoogleGenAI, Modality } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyDEJt6rONJ2E4PvmP96cPuA5mgwjrKPxu8" });

const App6 = () => {

    let [que, setQue] = useState("");
    let [showLoader, setShowLoader] = useState(false)
    const [imageResult, setImageResult] = useState(null);
    
    let getData = async()=>{
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash-exp-image-generation",
            contents: "fox with goggle",
            config: {
              responseModalities: [Modality.TEXT, Modality.IMAGE],
            },
          });
          for (const part of response.candidates[0].content.parts) {
            // Based on the part type, either show the text or save the image
            if (part.text) {
              console.log(part.text);
            } else if (part.inlineData) {
              const imageData = part.inlineData.data;
              const imageBlob = new Blob([imageData], { type: "image/jpeg" });
              console.log(imageBlob)
            //   const buffer = new Buffer.from(imageData, "base64");
            const fileReaderInstance = new FileReader();
      // This event will fire when the image Blob is fully loaded and ready to be displayed
            fileReaderInstance.onload = () => {
                let base64data = fileReaderInstance.result;
                console.log(base64data)
                setImageResult(base64data);
            };
            fileReaderInstance.readAsDataURL(imageBlob);
              console.log("Image saved as gemini-native-image.png");
            }
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
                <div className='alert alert-primary'>
                    <img src='' loading="lazy"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App6