/*
operation will be "add", "subtract", "multiply", or "divide"
function returns the sum, difference, product, or quotient of x and y
*/

function doMaths(x, y, operation) {
    if (operation === "add") {
        return x + y;
    } else if (operation === "subtract") {
        return x - y;
    } else if (operation === "multiply") {
        return x * y;
    } else if (operation === "divide") {
        if (y === 0) {
            console.log("second number cannot be 0.");
            return NaN;
        } else {
            return x / y;
        }
    } else {
        console.log("You must choose 'add', 'subtract', 'mutliply', or 'divide' as your operation");
    }
}

console.log(doMaths(3, 0, "divide"));