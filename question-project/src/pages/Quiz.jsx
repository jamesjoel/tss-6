import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Quiz = () => {
    let [queCounter, setQueCounter] = useState(0);
    let [que, setQue] = useState({});
    let queArr = useSelector(state=>state.QueReducer);
    let sortArr = useSelector(state=>state.SortedQueReducer)
    useEffect(()=>{
        let index= sortArr[queCounter];
        let a = queArr[index];
        setQue(a);
    },[])

    let nextQue = ()=>{
        let num = queCounter;
        setQueCounter(a=>++a);
        let index= sortArr[++num];
        let a = queArr[index];
        setQue(a);
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
                    A ) <input type='radio' name='ans' />&nbsp;&nbsp;{que.A}
                    <br />
                    <br />
                    B ) <input type='radio' name='ans' />&nbsp;&nbsp;{que.B}
                    <br />
                    <br />
                    C ) <input type='radio' name='ans' />&nbsp;&nbsp;{que.C}
                    <br />
                    <br />
                    D ) <input type='radio' name='ans' />&nbsp;&nbsp;{que.D}
                    <br />
                    <br />
                </div>
                <div className="card-footer">
                    <button onClick={nextQue} className='btn btn-info'>Next</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quiz