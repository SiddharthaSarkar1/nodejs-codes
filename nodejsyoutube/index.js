const fs = require('fs');


//creating a new file
//fs.writeFileSync('read.txt','Welcome Siddhartha Sarkar');


//it will Override the data
//fs.writeFileSync('read.txt','You will be a champ.');


//it will append file
//fs.appendFileSync('read.txt','Welcome Siddhartha Sarkar');

 const buf_data = fs.readFileSync('read.txt');
 //console.log(buf_data);
 
 
 original_data = buf_data.toString();
 console.log(original_data);
 