/*
Given a non-empty string like "Code" return a string like "CCoCodCode".

stringSplosion("Code") → "CCoCodCode"
stringSplosion("abc") → "aababc"
stringSplosion("ab") → "aab"

*/

function stringSplosion(string) {
    var newString = '';
    for (var i = 0; i < string.length; i++) {
        newString += string.slice(0, i + 1);
    }
    console.log(newString);
}

stringSplosion("Code");