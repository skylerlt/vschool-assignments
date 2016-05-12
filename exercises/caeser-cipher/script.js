var ask = require('readline-sync');
var phrase = ask.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(ask.question('How many letters would you like to shift? '));

var alphabet = "abcdefghijklmnopqrstuvwxyz";

function shiftLetters(phrase, shift) {
    var shiftedString = "";
    for (var i = 0; i < phrase.length; i++) {
        var letter = phrase[i];
        var index = alphabet.indexOf(letter);

        if (index === -1) {
            shiftedString += letter;
            continue;
        }

        var newIndex = (index + shift) % 26;
        shiftedString += alphabet[newIndex];
    }
    return shiftedString;
};

console.log(shiftLetters(phrase, shift));