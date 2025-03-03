import City from '../models/City.js';

let fetchCity = async(req, res)=>{
    let result = await City.find();
    res.send(result);
}

let fetchState = async(req, res)=>{
    let result = await City.distinct("state");
    res.send(result);
}

let fetchCityByState = async(req, res)=>{
    // console.log(req.params);
    let x = req.params.a;
    let result = await City.find({state:x});
    res.send(result);
}

export {fetchCity, fetchState, fetchCityByState}



