const EventEmitter = require("events");

const event = new EventEmitter();

/* event.on("SayMyName", () => {
    console.log("your name is vinod.")
})

event.on("SayMyName", () => {
    console.log("your name is bahadur.")
})

event.on("SayMyName", () => {
    console.log("your name is thapa.")
})
event.emit("SayMyName") */


event.on("checkPage", (sc, msg) => {
    console.log(`Status code is ${sc} abd the page is ${msg}.`)
})

event.emit("checkPage", 200, "ok");