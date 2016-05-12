var phrase = 'slimy smelly solution';
var newArray = [];

function letterFrequency() {
    for (var i = 0; i < phrase.length; i++) {
        var character = phrase.charAt(i);
        newArray[i]
        newArray[character]++;
    }
    return newArray;
};


console.log(letterFrequency());









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
//
//var frequency = {
//    "s": 2,
//    "l": 1,
//    "i": 1,
//    "m": 1,
//    "y": 1,
//    " ": 1,
//}
//
//for (var key in frequency) {
//    console.log('"' + key + '": ' + frequency[key]);
//}