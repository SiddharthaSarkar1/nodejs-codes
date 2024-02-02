const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); //For serving Static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') //Set the templete engine as pug
app.set('views', path.join(__dirname, 'views')) //Set the views directory

//END POINTS

app.get('/',(req, res)=>{
    const con = 'This is the best content on the internet so far use it wisely.'
    const params = {'title': 'Pubg is the best game.', 'content': con}
    res.status(200).render('index.pug', params);
})

app.post('/', (req, res) => {
    name1 = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `The name of the client is ${name1}, age is ${age} years old, ${gender}, residing at ${address}. More about the client : ${more}.`

    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'title': 'Best ever Gym website','message': 'Your form has been submitted successfully.'}
    res.status(200).render('index.pug', params);

})




/* //this code is upto video no 72
//our pug demo end point
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there! thanx for telling me hoe to use pug' })
  })

app.get("/", (req, res) => {
    res.send("This app is home page of my first express app with Harry.");
});

app.get("/about", (req, res) => {
    res.send("This app is about page of my first express app with Harry.");
});

app.post("/about", (req, res) => {
    res.send("This app is about page of my first express app using post method with Harry.");
});

app.get("/this", (req, res) => {
    res.status(404).send("This page is not available.");
});
 */


// START THE SERVER
app.listen(port, () => {
    console.log(`This is started successfully on port ${port}`);
});