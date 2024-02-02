const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.write("<h1>Welcome to my Homepage.</h1>");
    res.write("<h1>Adding another line to homepage</h1>");
    res.send();
});

app.get('/about', (req, res) => {
    res.status(200).send("Welcome to my About Page.");
});

app.get('/contact', (req, res) => {
    res.send("Welcome to my Contact Page.");
});

app.get('/temp', (req, res) => {
    res.json([
            {
                id : 1,
                fname : "Siddhartha",
                lname : "Sarkar",
                age : 26,
                city : "Howrah"
            },
            {
                id : 2,
                fname : "Sankar",
                lname : "Das",
                age : 28,
                city : "kolkata"
            }
        ]);
    });

app.listen(port, () => {
    console.log(`Listening to the port no : ${port}.`);
});