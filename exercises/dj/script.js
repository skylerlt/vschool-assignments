var box = document.getElementById('change');

box.addEventListener('mouseover', function () {
    box.style.backgroundColor = 'blue';
});

box.addEventListener('mousedown', function () {
    box.style.backgroundColor = 'red';
});

box.addEventListener('mouseup', function () {
    box.style.backgroundColor = 'yellow';
});

box.addEventListener('dbclick', function () {
    box.style.backgroundColor = 'green';
});

box.addEventListener('mousewheel', function () {
    box.style.backgroundColor = 'orange';
});