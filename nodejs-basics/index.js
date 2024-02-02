console.log("This is NodeJS tutorial for beginners.");
console.log("This is NodeJS tutorial for beginners.");
console.log("This is NodeJS tutorial for beginners.");

// process.exit(1);
// process.exit = 1;
// process.exitCode = 1;

const http = require('http');


const server = http.createServer((req, res) => {
   if(req.url == "/"){
       res.end("Hello from the Home")
   }else if(req.url == "/about"){
    res.end("Hello from the About")
   }else if(req.url == "/contact"){
    res.end("Hello from the Contact Us")
   }else{
    res.writeHead(404, {"Content-type" : "text/html"});
    res.end("<h1>404 error page doesnt exist</h1>")
   }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listning to the port number 8000");
})