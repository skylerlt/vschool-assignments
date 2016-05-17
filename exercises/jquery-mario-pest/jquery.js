var totalGoombas = null;
var totalBobombs = null;
var totalCheeps = null;
var goombaTotal = null;
var bobombTotal = null;
var cheepTotal = null;

function updateGrandTotal() {
    return goombaTotal + bobombTotal + cheepTotal;
}

function goombas() {
    totalGoombas++;
    totalCostGoombas = totalGoombas * 5;

    $("#goombasDisplay").text(totalGoombas);

    goombaTotal = baddieCost(totalGoombas, 5);

    $("#goombaPriceDisplay").text(goombaTotal);

    $("#grandTotalDisplay").text(updateGrandTotal())

};

$("#addGoombas").click(goombas);

$("goombaPriceDisplay").click(goombas);

function bobombs() {
    totalBobombs = totalBobombs + 1;
    totalCostBobombs = totalBobombs * 7;

    $("#bobombsDisplay").text(totalBobombs);

    bobombTotal = baddieCost(totalBobombs, 7);

    $("#bobombPriceDisplay").text(bobombTotal);

    $("#grandTotalDisplay").text(updateGrandTotal())
};

$("#addBobombs").click(bobombs);

$("bobombPriceDisplay").click(bobombs);

function cheeps() {
    totalCheeps = totalCheeps + 1;

    $("#cheepsDisplay").text(totalCheeps);

    cheepTotal = baddieCost(totalCheeps, 11);


    $("#cheepPriceDisplay").text(cheepTotal);

    $("#grandTotalDisplay").text(updateGrandTotal())
};

$("#addCheeps").click(cheeps);

$("cheepPriceDisplay").click(cheeps);

function baddieCost(monsterTotal, monsterCost) {
    return monsterCost * monsterTotal;
};