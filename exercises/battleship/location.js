//var ask = require('readline-sync');
//
//function Location() {
//    this.ship = true;
//    this.hit = true;
//    this.display = ""
//};

function myGrid() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++)
            console.log([i, j]);
    }
}

myGrid();

//console.log("Why don 't you go first. ");
//
//function location() {
//    var where = ask.question("Tell me where you want to shoot by picking the number across, 0 to 9. ")
//    var guess = Math.floor((Math.random() * 5) + 1);
//    if (guess === 1) {
//        console.log("Hit, baby  You win... for now!");
//    } else {
//        console.log("That's a miss, son! Try again! ");
//        location();
//    }
//};
//
//module.exports = location;
