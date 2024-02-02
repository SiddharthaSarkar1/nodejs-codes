const chalk = require('chalk');
const validator = require('validator');

console.log(chalk.blue.underline.inverse("Hello World"));
console.log(chalk.green.underline.inverse("Success"));
console.log(chalk.red.underline.inverse("False"));
console.log(chalk.yellow.underline.inverse("Yellow"));

const res = validator.isEmail('mail@mail.com'); //=> true
console.log(res ? chalk.green.inverse("True") : chalk.red.inverse("False"));

const res1 = validator.isEmail('mailmailcom'); //=> true
console.log(res1 ? chalk.green.inverse("True") : chalk.red.inverse("False"));