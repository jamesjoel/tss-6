let express = require("express");
let app = express();
// require("dotenv").config();



console.log(process.env.PORT)
app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/home.html");
})
app.get("/about", (req, res)=>{
    // res.send("hello");
    res.sendFile(__dirname+"/about.html");
})
app.get("/contact", (req, res)=>{
   res.sendFile(__dirname+"/contact.html")
})
app.get("*", (req, res)=>{
    res.sendFile(__dirname+"/notfoud.html");
})





app.listen(3000);
/*
gst(10, 12, ()=>{

});

*/
