//%s format variable to string
//%d
//%i
//%o

// console.log("I am %s and my age is %d", "Sidd", 23);
// console.clear();

// console.count("I am Sidd");
// console.count("I am Sidd");
// console.count("I am Sidd");
// console.count("I am Sidd");
// console.count("I am Rokey");

// console.countReset("I am Sidd");
// console.count("I am Sidd");
// console.count("I am Sidd");

const ProgressBar = require("progress");
const chalk = require("chalk");

const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas", {
  total: 20,
});

const timer = setInterval(() => {
  bar.tick();

  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);

console.log(chalk.green("This is nodejs tutorial"));
console.log(chalk.blue("This is nodejs tutorial"));