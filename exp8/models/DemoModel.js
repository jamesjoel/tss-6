require("../config/conn")
let mongoose = require("mongoose")
const DemoSchema = mongoose.Schema({
    name : String,
    age : Number,
    city : String
}, {collection : "demo"});

const Demo = mongoose.model("demo", DemoSchema);

module.exports = Demo;
