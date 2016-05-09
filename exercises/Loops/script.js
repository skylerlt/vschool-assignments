//var str = "How are you doing today?";
//var res = str.split("");
//var join = res.join(" ");
//
//console.log(join);

/*
Write a program that accepts a string as input. 
Then ask the user for a character. Write a loop that 
iterates over the string, and prints the position of 
the first occurrence of the specified character. If 
the character is not found, tell that to the user.
*/

//var readline = require("readline-sync");
//var myString = "This is a string";
//
//var guess = readline.question("Guess a letter: ");
//
//var stillLooking = true;
//for (var i = 0; i < myString.length; i++) {
//    if (guess === myString[i]) {
//        console.log(i);
//        stillLooking = false;
//        break;
//    }
//}
//
//if (stillLooking) {
//    console.log("Char not found.");
//}

/*
Write a program that accepts 10 numbers 
(each on a new line) and then prints out 
the smallest number out of the ten.
*/

var readline = require("readline-sync");

var numbers = [];

function findSmall() {
    for (var i = 0; i < 10; i++) {
        var tenNumber = readline.question("Enter a number: ");
        numbers.push(parseInt(tenNumber));
    }
    numbers.sort(function (a, b) {
        return a - b;
    });
    console.log(numbers[0]);
}

findSmall();



function secondFunction(string) {

    while (true) {
        var response = readline.question("Type a single character: ")

        for (var i = 0; i < string.length; i++) {
            if (response === string[i]) {
                return string.indexOf(response);
            }
        }

        console.log("Character not found");
    }
}

console.log(secondFunction("Hello Bob."));