var lyrics = ["This", "hit", "that", "ice", "cold", "Michelle", "Pfeiffer", "that", "white", "gold", "This", "one", "for", "them", "hood", "girls", "Them", "good", "girls", "straight", "masterpieces", "Stylin", "whilen", "livin", "it", "up", "in", "the", "city", "Got", "Chucks", "on", "with", "Saint", "Laurent", "Got", "kiss", "myself", "Im", "so", "pretty"];

//function print() {
//    console.log(lyrics.join(" "));
//}
//
//print();

//function reverse() {
//    console.log(lyrics.reverse().join(" "));
//};
//
//reverse();

//function everyOther() {
//    var other = []
//    for (var i = 0; i < lyrics.length; i += 2)
//        other.push(lyrics[i]);
//    console.log(other.join(" "))
//};
//
//everyOther();

function everyTwo() {
    var even = [];
    var odd = [];
    for (var i = 0; i < lyrics.length; i++) {
        if (lyrics.indexOf(i + 2) > -1) {
            even.push(lyrics[i])
        } else {
            odd.push(lyrics[i])
        }
    };
};

console.log(everyTwo());