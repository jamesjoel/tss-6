// let config = require("./config")
// let obj = config(10);
// obj.calc();
// let a = require("path")

// let b = a.resolve();

// console.log(b)
/*
let x = require("reverse-string");
let str = require("rndm");

let name = "rohit sharma";

let y = x(name);

let z = str(15);
// console.log(y);
// console.log(z);

*/

let pdf = require("pdf-creator-node");
let fs = require("fs");

let html = fs.readFileSync("home.html", "utf8")
var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};
var document = {
    html: html,
    
    path: "./resume2.pdf",
    type: "",
  };

  pdf.create(document, options).then((res) => {
    console.log(res);
  }).catch((error) => {
    console.error(error);
  });