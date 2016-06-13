var readline = require('readline-sync');

var Location = require("./location");

var numHits = 0;
var board = makeBoard();

function makeBoard() {
    var board = [];
    for (var i = 0; i < 10; i++) {
        var line = [];
        for (var j = 0; j < 10; j++) {
            line.push(new Location());
        }
        board.push(line)
    }
    return board;
};

function printBoard(board) {
    var printedBoard = "";
    for (var i = 0; i < board.length; i++) {
        var line = "";
        for (var j = 0; j < board[i].length; j++) {
            line += board[i][j].display + " ";
        }
        printedBoard += line + "\n";
    }
    console.log(printedBoard);
}

function updateBoard(x, y, board) {
    var currentLocation = board[y - 1][x - 1];
    if (currentLocation.ship) {
        console.log("Hit!")
        currentLocation.display = "X";
        currentLocation.hit = true;
        numHits++;
    } else {
        console.log("Miss!");
        currentLocation.display = "O";
    }
    printBoard(board);
};

function userGuess(board) {
    var x = readline.question("Guess an X coordinate: ");
    var y = readline.question("Guess a Y coordinate: ");

    updateBoard(x, y, board);
}

(function playGame() {
    printBoard(board);

    while (numHits < 3) {
        userGuess(board);
    }
    console.log("Winner!")
})();
