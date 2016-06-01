String.prototype.camelCase = function () {
    var newString = '';
    var lastEditedIndex;
    for (var i = 0; i < this.length; i++) {
        if (this[i] === ' ' || this[i] === '-' || this[i] === '_') {
            newString += this[i + 1].toUpperCase();
            lastEditedIndex = i + 1;
        } else if (lastEditedIndex !== i) newString += this[i].toLowerCase();
    }
    return newString;
}

console.log("my name is Sky".camelCase());




function camelCase(string) {
    if (string.indexOf(" ") != -1) {
        var splitArray = string.split(" ");
        console.log(firstLetter(splitArray));
    } else if (string.indexOf("-") != -1) {
        var splitArray = string.split("-");
        console.log(firstLetter(splitArray));
    } else if (string.indexOf("_") != -1) {
        var splitArray = string.split("_");
        console.log(firstLetter(splitArray));
    } else {
        console.log("thats only one word silly.")
    }

}

function firstLetter(array) {

    var newString = array[0];
    for (var i = 1; i < array.length; i++) {
        newString += array[i].charAt(0).toUpperCase().concat(array[i].slice(1));

    }
    return (newString);
}

camelCase("grease is the time its the place it's the motion \ngrease is the word it's got groove it's got meaning \nit's the way that we're feeling");


function camelCase(string) {
    var isDashSeparated = string.indexOf("-") > -1;
    var isSpaceSeparated = string.indexOf(" ") > -1;
    var isUnderscoreSeparated = string.indexOf("_") > -1;

    if (isDashSeparated) {
        var wordArray = string.split("-");
    } else if (isSpaceSeparated) {
        var wordArray = string.split(" ");
    } else if (isUnderscoreSeparated) {
        var wordArray = string.split("_");
    }

    var camelString = wordArray[0];

    for (var i = 1; i < wordArray.length; i++) {
        var word = wordArray[i].toLowerCase();
        camelString += word.substring(0, 1).toUpperCase() + word.substring(1);
    }
    return camelString;

}

console.log(camelCase("this-is-dash-separated"));
console.log(camelCase("this_is_underscore_separated"));
console.log(camelCase("this is space separated"));