function hover() {
    document.getElementById('change').addEventListener('mouseover', function () {
        document.getElementById('change').style.backgroundColor = 'blue';
    });
};

function mouseDown() {
    document.getElementById('change').addEventListener('onmousedown', function () {
        document.getElementById('change').style.backgroundColor = 'red';
    });
};

function mouseUp() {
    document.getElementById('change').addEventListener('onmouseup', function () {
        document.getElementById('change').style.backgroundColor = 'yellow';
    });
};

function doubleClick() {
    document.getElementById('change').addEventListener('ondbclick', function () {
        document.getElementById('change').style.backgroundColor = 'green';
    });
};

function mouseWheel() {
    document.getElementById('change').addEventListener('onmousewheel', function () {
        document.getElementById('change').style.backgroundColor = 'orange';
    });
};