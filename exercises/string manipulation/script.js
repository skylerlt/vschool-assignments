//var ask = require('readline-sync');
//console.log('Hello! My name is Betty. Help me get to know you!\n');
//var firstName = ask.question('What is your first name? ');
//
//console.log(firstName.toUpperCase());
//
//var ask = require('readline-sync');
//console.log('Would you like to know how many letters are in a word? ');
//var howLong = ask.question('Pick a word. ');
//
//console.log(howLong.length);

//var ask = require('readline-sync');
//console.log('Would you like me to add two words together? ');
//var oneString = ask.question('Type a word. ');
//var twoString = ask.question('Type another word. ');
//
//console.log(oneString.concat(" " + twoString));

var ask = require('readline-sync');
console.log("Would you like to see me take a phrase and cut it in half? ");
var phrase = ask.question('Type in a phrase over twenty characters long. ')

var phraseArray = [];

for (var i = 0; phrase.length > 20; i++) {
    if (phrase.length > 20) {
        phrase.push(phraseArray)