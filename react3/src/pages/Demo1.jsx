import React from 'react'

const Demo1 = () => {

    let data = ["indore", "mumbai", "pune", "delhi"]
    let user = [
        {
            name : "rohit",
            age : 25
        },
        {
            name : "amar",
            age : 23
        },
        {
            name : "vijay",
            age : 21
        },
        {
            name : "vijay",
            age : 21
        },
        {
            name : "vijay",
            age : 21
        },
        {
            name : "vijay",
            age : 21
        },
        {
            name : "vijay",
            age : 21
        },
        {
            name : "vijay",
            age : 21
        },
        {
            name : "vijay",
            age : 21
        }

    ]


  return (
    <>
    <div>Demo1</div>
    {
        data.map((a)=>{ // listing
            return(
            <h1>{a}</h1>
            )
        })
    }
    <br />
    <table className='table table-dark table-hover table-bordered table-striped'>
        <thead>
            <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {
                user.map((item, index)=>{
                    return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    )
                })
            }
        </tbody>


    </table>
    
    </>
  )
}

export default Demo1