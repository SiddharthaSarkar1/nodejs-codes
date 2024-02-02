const fs = require('fs');

/* fs.writeFile('read.txt', 'Today is awesome day', (err) => { 
    console.log("Error message : "+err);
 } ) */

 /* fs.appendFile('read.txt', 'I will start winning from today onward', (err) => { 
    if(err){
        console.log("Error message : "+err);
    }else{
        console.log("Successfully appended");
    }
 } ) */


fs.readFile('read.txt', 'utf-8', (err, data) => {
     if(err){
        console.log("Error message : "+err);
     }else{
         console.log(data)
     }
 });
