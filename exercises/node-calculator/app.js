var add = require("./functions/add");
add(2, 3);

var subtract = require("./functions/subtract");
subtract.minus(6, 3);

var multiply = require("./functions/multiply");
var times = new multiply();
times.times(6, 6);

var divide = require("./functions/divide");
divide.divide();

var exponent = require("./functions/exponent").toPower;
exponent(5, 3);

function calculator(x, y, operation) {

    switch (operation) {
    case "add":
        return add(x, y);
        break;
    case "subtract":
        return subtract(x, y);
        break;
    case "multiply":
        return multiply(x, y);
        break;
    case "divide":
        return divide(x, y);
        break;
    case "exponent":
        return exponent(x, y);
        break;
    default:
        break;
    }
};
