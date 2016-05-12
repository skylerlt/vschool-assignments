var lyrics = ["This", "hit", "that", "ice", "cold", "Michelle", "Pfeiffer", "that", "white", "gold", "This", "one", "for", "them", "hood", "girls", "Them", "good", "girls", "straight", "masterpieces", "Stylin", "whilen", "livin", "it", "up", "in", "the", "city", "Got", "Chucks", "on", "with", "Saint", "Laurent", "Got", "kiss", "myself", "Im", "so", "pretty"];

//function one() {
//    console.log(lyrics.join(' '));
//};
//
//function two() {
//    var backwards = lyrics.reverse(' ');
//    console.log(backwards.join(' '));
//};
//
//function three() {
//    var everyOther = ' ';
//    for (var i = 0; i < lyrics.length; i += 2) {
//        everyOther += lyrics[i];
//    }
//    return everyOther;
//};

function four() {
    var everyTwo = ' '
    for (var i = 0; i < lyrics.length; i++)
        if (lyrics[i] % 3) {
            everyTwo += lyrics[i]
        }
    return everyTwo;
}

//console.log(one());
//
//console.log(two());
//
//console.log(three());

console.log(four());