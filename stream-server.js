const express= require("express");
const BinaryFile= require("binary-file");

const HOST = process.env.HOST || "localhost"
const PORT= process.env.PORT || 2000

var morgan = require("morgan");

const fs= require("fs");

const app = express();

app.use(morgan('dev')); 

const func= require("./function");

var tk = fs.createReadStream('./truyen-kieu.txt');

var big= fs.createReadStream('./1GB.txt')


tk.setEncoding('utf8');

const tras = function (chunk, enc, cb) {
    chunk = func.change(chunk);
    this.push(chunk)
    cb();
}

 //------------ truyện kiều----------------

app.get("/truyenkieu", (req, res) => {
    res.set({"content-type": "text/html ; charset=utf-8"})
    tk.pipe(tras).pipe(res);
})

   // ----BIG DATA-------- 

app.get("/bigdata", (req, res) => {
    big.pipe(res);

})

app.listen(PORT, HOST, (err)=> {
    if(err) {console.log(err)}
    console.log("Server is running.....")
  })



