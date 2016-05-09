document.getElementById('change').addEventListener('mouseover', function () {
    document.getElementById('change').style.backgroundColor = 'blue';
});

document.getElementById('change').addEventListener('onmousedown', function () {
    document.getElementById('change').style.backgroundColor = 'red';
});

document.getElementById('change').addEventListener('onmouseup', function () {
    document.getElementById('change').style.backgroundColor = 'yellow';
});

document.getElementById('change').addEventListener('ondbclick', function () {
    document.getElementById('change').style.backgroundColor = 'green';
});

document.getElementById('change').addEventListener('onmousewheel', function () {
    document.getElementById('change').style.backgroundColor = 'orange';
});