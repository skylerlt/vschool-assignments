// take a string as input
// remove all the vowels from the string
// return new string

function vowels(string) {
    var noVowels = "";
    var allVowels = "aeiou";
    for (var i = 0; i < string.length; i++) {
        if (allVowels.indexOf(string[i]) === -1) {
            noVowels = noVowels + string[i];
        }
    }
    return noVowels;
};

console.log(vowels("Hello World"));

//write constructor for car that has at leasat 3 properties and 1 method

//function Car(engine, doors, year, make) {
//    this.engine = engine;
//    this.doors = doors;
//    this.year = year;
//    this.make = make;
//    this.drive = function () {
//        console.log("Vroom");
//    }
//}
//
//var myCar = new Car("v8", 4, 2012, "malibu");
//
//myCar.drive();