var lyrics = ["This", "hit", "that", "ice", "cold", "Michelle", "Pfeiffer", "that", "white", "gold", "This", "one", "for", "them", "hood", "girls", "Them", "good", "girls", "straight", "masterpieces", "Stylin", "whilen", "livin", "it", "up", "in", "the", "city", "Got", "Chucks", "on", "with", "Saint", "Laurent", "Got", "kiss", "myself", "Im", "so", "pretty"];

//function print(){
//    var forward = " ";
//    for (var i = 0; i < lyrics.length; i++){
//        forward += lyrics[] + " ";
//    }
//    console.log(forward)
//};
//
//print();

//function print(){
//    return lyrics.join(" ");
//};
//
//console.log(print());

//function printReverse(){
//    return lyrics.reverse().join(" ");
//};
//
//console.log(printReverse());

//function printReverse(){
//    console.log(lyrics.reverse())
//};
//
//printReverse();

function everyOther() {
    var everyOtherLyric = " ";
    for (i = 0; i < lyrics.length; i += 2) {
        everyOtherLyric += lyrics[i];
    }
    return everyOtherLyric;
};

console.log(everyOther());