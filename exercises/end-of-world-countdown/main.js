var body = document.getElementById("body");
var countdownText = document.getElementById("countdown");
var secondsLeft = 10;
countdownText.innerHTML = secondsLeft;

function playExplosion() {
    var audio = new Audio('bomb.mp3');
    audio.play();
}

var interval = setInterval(function () {
    
    if (secondsLeft === 0) {
        countdownText.innerHTML = secondsLeft;
        body.style.background = "url('explode.jpeg') no-repeat center center fixed";
        body.style.backgroundSize = "cover";
        playExplosion();
        clearInterval(interval);
    } else {
        countdownText.innerHTML = secondsLeft;
        secondsLeft--;
    }
    
}, 1000);
