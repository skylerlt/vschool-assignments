var totalGoombas = null;
var totalBobombs = null;
var totalCheeps = null;
var goombaTotal = null;
var bobombTotal = null;
var cheepTotal = null;

function goombas() {
    totalGoombas++;
    totalCostGoombas = totalGoombas * 5;
    document.getElementById('goombasDisplay').innerHTML = totalGoombas;

    goombaTotal = baddieCost(totalGoombas, 5);

    document.getElementById('goombaPriceDisplay').innerHTML = goombaTotal;

    document.getElementById('grandTotalDisplay').innerHTML = updateGrandTotal();
};

function updateGrandTotal() {
    return goombaTotal + bobombTotal + cheepTotal;
}

document.getElementById('addGoombas').addEventListener('click', goombas);

document.getElementById('goombaPriceDisplay').addEventListener('click', goombas);

function bobombs() {
    totalBobombs = totalBobombs + 1;
    totalCostBobombs = totalBobombs * 7;
    document.getElementById('bobombsDisplay').innerHTML = totalBobombs;

    bobombTotal = baddieCost(totalBobombs, 7);

    document.getElementById('bobombPriceDisplay').innerHTML = bobombTotal;

    document.getElementById('grandTotalDisplay').innerHTML = updateGrandTotal();
};

document.getElementById('addBobombs').addEventListener('click', bobombs);

function cheeps() {
    totalCheeps = totalCheeps + 1;
    document.getElementById('cheepsDisplay').innerHTML = totalCheeps;

    cheepTotal = baddieCost(totalCheeps, 11);

    document.getElementById('cheepPriceDisplay').innerHTML = cheepTotal;

    document.getElementById('grandTotalDisplay').innerHTML = updateGrandTotal();
};

document.getElementById('addCheeps').addEventListener('click', cheeps);

function baddieCost(monsterTotal, monsterCost) {
    return monsterCost * monsterTotal;
};