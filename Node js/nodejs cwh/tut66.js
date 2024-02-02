const http = require("http");
const fs = require("fs");
const { setServers } = require("dns");
const fileContent = fs.readFileSync("tut66htmlfile.html");

//Creating a server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(fileContent);
});

server.listen(80, '127.0.0.1', () => {
    console.log("Listning on port 80")
});