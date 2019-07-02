const express = require("express")

exports.change =function change(data) {
   data= data.replace(/[?|:|!|;|.]/g, (val) => { 
      return val+"\n";
   });

  data= data.split("\n");
  data =data.map(elemet => {
      if( count(elemet)) {return elemet }
      else return elemet+"\n";
  })

 data= data.toString();
 data= data.replace(/[.|,]/g, "")
 return data
}

function count(str) {
   var count=0;
  for( var i=0;i<str.length;i++) {
      if( str[i] == " ") {count++;}
   }
  if(count<6 && ( (str.indexOf(":") != -1) || (str.indexOf("!") != -1)))  {return true}
  else { return false}
   
}