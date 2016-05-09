var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newArray = [];

for (var i = 0; i < people.length; i++) {
    newArray.push(people[i] + ":");
    for (var a = 0; a < alphabet.length; a++) {
        newArray.push(alphabet[a].toUpperCase())
    }
};

console.log(newArray);