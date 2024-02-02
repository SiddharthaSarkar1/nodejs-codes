//console.log("My name is Siddhartha Sarkar.");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Ordered list and Unordered list</title>
  </head>
  <body bgcolor="lavender">
      <h1>Siddhartha Sarkar<h1>
      <h1>Name of Courses</h1>
      <ol>
          <li>Operating System
          <li>Computer Networks
          <li>Data Structures and Algorithms
          <li>DBMS
  
      </ol>
  
      <h2>Additional Courses</h1>
      <ol start="5">
      <li>Theory of Computer
      <li>HTML
      <li>Css
      </ol>
  
      <h1>Name of Courses</h1>
      <ol type="a">
          <li>Operating System
          <li>Computer Networks
          <li>Data Structures and Algorithms
          <li>DBMS
  
      </ol>
  
      <h1>Name of Courses</h1>
      <ol start="I">
          <li>Operating System
          <li>Computer Networks
          <li>Data Structures and Algorithms
          <li>DBMS
  
      </ol>
      <img src="sidpic.jpg" height="300" width="400" border="20" title="Siddhartha"/>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});