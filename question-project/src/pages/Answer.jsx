import React from 'react'
import { useSelector } from 'react-redux'

const Answer = () => {
    let queArr = useSelector(state=>state.QueReducer);
    let ansArr = useSelector(state=>state.AnsReducer);

    let checkAns = (queno, ans)=>{
        let que = queArr[queno];
        if(que.answer == ans){
            
            return <i className="fa fa-check text-success" aria-hidden="true"></i>
        }else{
            return <i className="fa fa-times text-danger" aria-hidden="true"></i>;
        }
    }
    let correctAns = (queno, ans)=>{
        let que = queArr[queno];
        return que.answer;
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h4 className='text-center my-3'>Your Answer Sheet</h4>
                <table className='table table-dark table-hover table-bordered'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Your Ans</th>
                            <th>Correct Ans</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ansArr.map((item, index)=>{
                                return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.ans}</td>
                                    <td>{correctAns(item.queno, item.ans)}</td>
                                    <td>{checkAns(item.queno, item.ans)}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Answer