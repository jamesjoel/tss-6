
let demo = async(req, res)=>{
    console.log(req.params);
    res.send({success:true});
}

export {demo};