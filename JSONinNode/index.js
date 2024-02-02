const fs = require('fs');

const bioData = {
    name : "vinod",
    age : 26,
    channel : "Thapa technical" 
};

const jsonData = JSON.stringify(bioData);

/* fs.writeFile('json1.json', jsonData, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("Successfully Created.")
    }
}) */

fs.readFile("json1.json", "utf-8", (err, data) => {
    if(err){
        console.log(err)
    }else{
        console.log(data)
        const origData = JSON.parse(data)
        console.log(origData)
    }
})

