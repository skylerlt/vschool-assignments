//problem: check how many times each character in the phrase repeats

function letterFrequency(phrase) {
    var letterFrequency = {};
    // Iterate through the phrase
    for (var i = 0; i < phrase.length; i++) {
        var letter = phrase[i];
        if (!letterFrequency.hasOwnProperty(letter)) {
            letterFrequency[letter] = 1
        } else {
            letterFrequency[letter] += 1;
        }
    }
    for (var key in letterFrequency) {
        console.log('"' + key + '"' + ": " + letterFrequency[key]);
    }
};

(letterFrequency('slimy smelly solution'))

// Create an object with the letters as keys and counts as values
// For each letter of the phrase, add it to a count of that character (key)

// If that letter has not yet been found, set count to 1
// return letter count

//    for (var i = 0; i < phrase.length; i++) {
//        var character = phrase.charAt(i);
//        newArray[i]
//        newArray[character]++;
//    }
//    return newArray;
//};
//
//
//letterFrequency('slimy smelly solution');









//var string = 'slimy smelly solution';
//
//function getFrequency(string) {
//    var freq = {};
//    for (var i = 0; i < string.length; i++) {
//        var character = string.charAt(i);
//        if (freq[character]) {
//            freq[character]++;
//        } else {
//            freq[character] = 1;
//        }
//    }
//
//    return freq;
//};
////
////var frequency = {
////    "s": 2,
////    "l": 1,
////    "i": 1,
////    "m": 1,
////    "y": 1,
////    " ": 1,
////}
////
//for (var key in frequency) {
//    console.log('"' + key + '": ' + frequency[key]);
//}