function startTimer(duration, display) {
    var timer = duration
        , hours
        , minutes, seconds;
    setInterval(function () {
        hours = parseInt(time / 60, 10)
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds + " is all the time that remains until...";

        if (--timer < 0) {
            //            timer = duration;
            alert("The world has ended.  Good bye.")
        }
    }, 1000);
}

window.onload = function () {
    var time = 60 * 10
        , display = document.getElementById('time');
    startTimer(time, display);
};