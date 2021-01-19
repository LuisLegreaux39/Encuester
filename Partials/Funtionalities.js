var fs = require('fs');
var UTIL = {
     writeFile:function(FileName,param){
        fs.writeFile(FileName,String(param),(err)=>{
            if(err) throw err;
            console.warn("Succes")
        })
    },
    ReadFile:function(FileName){
        fs.readFile(FileName,'utf8',(err,data)=>{
            if(err) throw err;
            console.log(data)
        })
    }
}
module.exports = UTIL;