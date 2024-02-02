//fs module ----> File System Module.........

const fs = require('fs');

// fs.readFile('calc.js', 'utf-8', (err, data) => {
//     console.log(data);
// })

fs.writeFile('calc1.js', 'console.log("done");', (err) => {
    console.log("Data Saved......");
})