var ask = require('readline-sync');
console.log("Ready to get your Battleship on?  Let's do this thing!");
var firstName = ask.question('First, why not tell me your name? ');
console.log("Nice to meet you " + firstName + ".  I hope you're ready to get spanked!");

var location = require("./location");
location();
