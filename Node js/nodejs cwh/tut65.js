/* Synchronous or Blocking ====> Line by line Execution

Asynchronous or Non-blocking ====> Line by line Execution not guaranteed - callbacks will be fired */

const fs = require("fs");
fs.readFile("Reading.txt","utf-8", (err,data)=>{
    console.log(err,data);
});
//fs.readFile(path[, options], callback)
console.log("This is a message");