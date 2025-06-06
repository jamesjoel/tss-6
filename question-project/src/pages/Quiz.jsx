import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { addAns } from '../redux/AnsSlice';
import { useNavigate } from 'react-router-dom';


const Quiz = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let [queCounter, setQueCounter] = useState(0);
    let [que, setQue] = useState({});
    let [ans, setAns] = useState(null);
    let queArr = useSelector(state=>state.QueReducer);
    let sortArr = useSelector(state=>state.SortedQueReducer)
    useEffect(()=>{
        let index= sortArr[queCounter];
        let a = queArr[index];
        setQue(a);
    },[])

    let nextQue = ()=>{
        
        let num = queCounter;
        let obj = { queno : sortArr[num], ans : ans };
        dispatch(addAns(obj));
        
        setQueCounter(a=>++a);
        if(sortArr.length-1 == queCounter){
            navigate("/answer")
        }else{

            let index = sortArr[++num];
           let a = queArr[index];
           setQue(a);
           setAns(null)
        }
            
        
        
    }


  return (
    <div className="row">
        <div className="col-md-8 offset-md-2 mt-4">
            <div className="card">
                <div className="card-header">
                    <h3># {queCounter+1}</h3>
                </div>
                <div className="card-body">
                    <p><b>Que : </b>{que.question}</p>
                    <br />
                    A ) <input type='radio' checked= {ans==="A"} onChange={(e)=>setAns(e.target.value)} name='ans' value="A" />&nbsp;&nbsp;{que.A}
                    <br />
                    <br />
                    B ) <input type='radio' checked= {ans==="B"} onChange={(e)=>setAns(e.target.value)} name='ans' value="B"/>&nbsp;&nbsp;{que.B}
                    <br />
                    <br />
                    C ) <input type='radio' checked= {ans==="C"} onChange={(e)=>setAns(e.target.value)} name='ans' value="C"/>&nbsp;&nbsp;{que.C}
                    <br />
                    <br />
                    D ) <input type='radio' checked= {ans==="D"} onChange={(e)=>setAns(e.target.value)} name='ans' value="D"/>&nbsp;&nbsp;{que.D}
                    <br />
                    <br />
                </div>
                <div className="card-footer">
                    <button onClick={nextQue} className='btn btn-info'>{sortArr.length == queCounter+1 ? 'Submit' : 'Next'}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quiz