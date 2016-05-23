var readline = require("readline-sync");

var search = true;

var wordArray = [];

function AddWord(word, definition) {
    this.word = word;
    this.definition = definition;
};

var dictionary = [];

function wordCheck() {

    var checkWord = readline.question("Enter a 'word' to look it up. enter 'q' to quit. ");

    var wordIndex = wordArray.indexOf(checkWord.toLowerCase())

    if (checkWord === "q") {
        console.log("Thanks for using the dictionary.  Have a nice day! ")
        search = false;
    } else if (wordIndex === -1) {
        wordArray.push(checkWord);
        var definiton = readline.question(checkWord + " is not in the dictinonary.  Please enter the definition to add it. ");
        dictionary.push(new AddWord(checkWord, definiton));
        console.log("Thanks for adding " + checkWord + " to the dictionary. ")
    } else if (wordIndex >= 0) {
        console.log(dictionary[wordIndex].definition);
    }
}
while (search) {
    wordCheck();
};