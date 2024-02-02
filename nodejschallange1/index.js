const fs = require('fs');
const { fchmod } = require('fs/promises');

//fs.mkdirSync('thapa');

//fs.writeFileSync("thapa/bio.txt", "My name is Siddhartha sarkar");

//fs.appendFileSync("thapa/bio.txt", "I am a student of MCA will be passing out on 2021.");

//const data = fs.readFileSync("thapa/bio.txt", "utf8");

//console.log(data)

//fs.renameSync("thapa/bio.txt", "thapa/mybio.txt");

//fs.unlinkSync("thapa/mybio.txt");

fs.rmdirSync("thapa");