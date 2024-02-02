const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Hello From the Express by <b>Siddhartha Sarkar</b> in HomePage.</h1>");
});

app.get('/about', (req, res) => {
    res.send("<h1>Hello From the Express by <b>Siddhartha Sarkar</b> in AboutPage.</h1>");
});

app.listen(8000, () => {
    console.log("Listening the port at 8000");
});