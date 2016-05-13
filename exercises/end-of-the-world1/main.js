var hours = 0,
    minutes = 0,
    seconds = 5,
    time = "";

function getTime(hours, minutes, seconds) {
    time = ((hours != 0) ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + ((minutes != 0) ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    document.getElementById("timer").textContent = time;
}
getTime(hours, minutes, seconds);

function subtract() {

    if (seconds > 0) {
        seconds--;
        timer();
    } else {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
            timer();
        } else {
            if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
                timer();
            }
        }
    alert("It's the end of the world as we know it!");
    }

    getTime(hours, minutes, seconds);


}

function timer() {
    t = setTimeout(subtract, 1000);
}

window.onload = timer()