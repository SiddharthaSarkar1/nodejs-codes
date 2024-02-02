const fs = require("fs");
let text = fs.readFileSync("Reading.txt","utf-8");
text = text.replace("Siddhartha", "Rohan");

//readFileSync()	Same as readFile(), but synchronous instead of asynchronous
//writeFileSync()	Same as writeFile(), but synchronous instead of asynchronous

console.log("Content of the file is : ");
console.log(text);

console.log("Creating a new file.......");
fs.writeFileSync("Rohan.txt", text);