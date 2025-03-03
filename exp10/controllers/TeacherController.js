const routes = require("express").Router();
const Teacher = require("../models/Teacher");

routes.get("/", async(req, res)=>{
    let result = await Teacher.find();
    res.send(result);

    // Teacher.find((result)=>{
    //     res.send(result)
    // })

})
routes.post("/save", async(req, res)=>{
    await Teacher.create(req.body);
    res.send("data saved");
})


module.exports = routes;

/*
    Teacher.find((result1)=>{
        Student.find((result2)=>{
            User.find((result3)=>{
            })
        })
    })

    let demo = async()=>{
        
        let result1 = await Teacher.find();
        let result2 = await Student.find();
        let result3 = await User.find();
    
    }
    


*/