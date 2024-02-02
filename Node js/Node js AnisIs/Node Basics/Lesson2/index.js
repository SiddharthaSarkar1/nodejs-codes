const fs = require("fs");

// How to create and write file using asynchronous method
fs.writeFile('sid.txt', 'My name is Siddhartha Sarkar and i am learning node js', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("Successful");
    }
})

// How to update file
/* fs.appendFile('demo.txt', 'Hey there i have been using this ti aapend the text.', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("Successful");
    }
}) */


// How to read file
/* fs.readFile('demo.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
}); */

//How to rename a file
/* fs.rename('demo.txt', 'demo2.txt', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("Successfully renamed the file.");
    }
}); */


//How to delete a file
/* fs.unlink('demo.txt', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("Successfully file has been deleted.");
    }
}); */


//how to check does the file exist or not
//exists() is a deprecated function
/* fs.exists('demo.txt', (result) => {
    if(result){
        console.log("Found.");
    }else{
        console.log("Not found.");
    }
});
 */