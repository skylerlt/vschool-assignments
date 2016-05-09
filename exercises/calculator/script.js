function myAddingFunction() {
    var x = document.getElementById('addThis').value * 1;
    var y = document.getElementById('addThat').value * 1;
    var z = x + y;

    document.getElementById('result1').innerHTML = z;
}

function mySubtractFunction() {
    var x = document.getElementById('subtractThis').value * 1;
    var y = document.getElementById('subtractThat').value * 1;
    var z = x - y;

    document.getElementById('result2').innerHTML = z;
}

function myMultiplyFunction() {
    var x = document.getElementById('multiplyThis').value * 1;
    var y = document.getElementById('multiplyThat').value * 1;
    var z = x * y;

    document.getElementById('result3').innerHTML = z;
}