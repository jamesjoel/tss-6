import mongoose from '../config/conn.js'

let DepSchema = mongoose.Schema({
    name : String
})

let Dep = mongoose.model("department", DepSchema);

export default Dep;