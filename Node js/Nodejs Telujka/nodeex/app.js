// console.log("Hello, World.");

// let a = 7;
// let b = 3;
// let c = a+b;
// console.log("The output is "+c);
const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {'Cintent-Type':'text/html'});
    res.write("Welcome you all.....");
    res.end();
}).listen(8080);