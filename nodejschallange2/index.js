const fs = require('fs');

/* fs.mkdir("thapa", (err) => {
    if(err){
        console.log("Error : "+err);
    }else{
        console.log("Successfully created the folder");
    }
}) */

/* fs.writeFile('thapa/bio.txt', "My name is Siddhatrha Sarkar.", (err) => {
    if (err) {
        console.log("Error : " + err);
    } else {
        console.log("Successfully created the file");
    }
}); */


/* fs.appendFile('thapa/bio.txt', 'I pray to god nd i believe that i will become a very good and succesful software engineer', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("Successfully appended the file.");
    }
}); */

/* fs.readFile("thapa/bio.txt", "utf-8", (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
}) */


/* fs.rename("thapa/bio.txt", "thapa/mybio.txt", (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("Successfully Renamed.")
    }
}) */


/* fs.unlink("thapa/mybio.txt", (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("File is deleted.")
    }
}) */

fs.rmdir("thapa", (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("Folder is deleted.")
    }
})