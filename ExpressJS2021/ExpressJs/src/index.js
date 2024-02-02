const path = require('path');
const express = require('express');
const hbs = require("hbs");
const requests = require("requests");

const app = express();

const staticPath = path.join(__dirname, "../public");
// console.log(path.join(__dirname, "../public"));
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Builtin Middleware
//app.use(express.static(staticPath));

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
    res.render("index", {
        myName : "Siddhartha Sarkar",
        nickName : "Tukai babu"
    });
});

app.get("/about", (req, res) => {
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=faf9d778970d216acfed437c3ffabdc3`)
    .on('data', (chunk) => {
        const objData = JSON.parse(chunk);
        const arrData = [objData];
        console.log(arrData);
        console.log(`City name is : ${arrData[0].name} and the temparature is : ${arrData[0].main.temp}.`);
        res.write(`<h1>City name is : <u>${arrData[0].name}</u> and the temparature is : <u>${arrData[0].main.temp}</u>.`);
    })
    .on('end', (err) => {
    if (err) return console.log('connection closed due to errors', err);
    res.end();
    });
});

 app.get('/about/*', (req, res) => {
     res.render("404", {
    errorContent : "You have got an error."
    });
 });

//This should be at bottom 
app.get('*', (req, res) => {
    res.render("404", {
        errorContent : "You have got an error."
    });
});

app.listen(8000, () => {
    console.log("Listening the port at 8000");
});