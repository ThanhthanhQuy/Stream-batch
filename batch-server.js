const express = require("express"); 
const HOST = process.env.HOST || "localhost"
const PORT= process.env.PORT || 2000

const fs= require("fs");

const morgan = require("morgan");

const app= express();

app.use(morgan('dev')); 

const func= require("./function");



 //------------ truyện kiều----------------

app.get("/truyenkieu", (req, res) => {
  res.set({"content-type": "text/html ; charset=utf-8"})
 fs.readFile("./truyen-kieu.txt", "utf8", (err, data ) => {
    if(err) { console.log(err) }
      data= func.change(data);
      res.write(data);
      res.end()
   })
})

 // ----BIG DATA--------

app.get("/bigdata", (req, res) => {

  fs.readFile("./1GB.txt", "utf8", (err, data ) => {
    if(err) { console.log(err) }
      data= func.change(data);
      res.write(data);
      res.end()
   })
})
app.listen(PORT, HOST, (err)=> {
  if(err) {console.log(err)}
  console.log("Server is running.....")
})
