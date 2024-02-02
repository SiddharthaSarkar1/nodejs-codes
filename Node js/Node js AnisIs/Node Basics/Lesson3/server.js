const http = require("http");
const port = 3000;
const hostName = '127.0.0.1';

const myServer = http.createServer((req, res) => {

    res.end("Hello i am your first server,My name is Siddhartha Sarkar.");
});

myServer.listen(port, hostName, () => {
    console.log(`Server is running successfully at http://${hostName}:${port}`);
});


