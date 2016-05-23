var totalClicks = null;

function clickCounter() {
    totalClicks++;

    document.getElementById('result').innerHTML = totalClicks;

    localStorage.clickcount = Number(localStorage.clickcount) + 1;

    document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";

};

function displayOnRefresh() {
    document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
}