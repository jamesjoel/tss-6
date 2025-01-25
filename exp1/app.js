let express = require("express");
let app = express();



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





app.listen(5550);
/*
gst(10, 12, ()=>{

});

*/
