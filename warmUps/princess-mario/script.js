var ask = require("readline-sync");


function Player(name) {
    var name = ask.question("Who would you like to be, Mario or Luigi? ")
    this.name = name;
    this.totalCoins = 0;
    this.status = "Small";
    this.star = false;
    this.gameActive = true;
    this.setName = function (namePicked) {
        this.name = namePicked;
    }
    this.gotHit = function () {
        if (this.star === false) {
            if (this.status === "Powered Up") {
                this.status = "Big";
            } else if (this.status === "Big") {
                this.status = "Small";

            } else if (this.status === "Small") {
                this.status = "Dead";
                this.gameActive = false;
            }

        }

    }
    this.gotPowerUp = function () {
        if (this.status === "Small") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Powered Up";
        }
    }

    this.gotStar = function () {
        this.star = true;
    }

    this.addCoin = function () {
        this.totalCoins++;
    }
    this.print = function () {
        console.log("\n-------------------\nName: " + this.name + "\nCoins: " + this.totalCoins + "\nStatus: " + this.status + "\nStar: " + this.star)
    }
}

function game(player) {
    var random = Math.floor(Math.random() * 3);
    switch (random) {
    case 0:
        player.gotHit();
        break;
    case 1:
        player.gotPowerUp();
        break;
    case 2:
        player.addCoin();
        break;
    case 3:
        player.gotStar();
        break;
    default:
        break;
    }
    player.print();
}

function playGame(n) {
    var player = new Player();
    for (var i = 0; i < n; i++) {
        game(player);
    }
}

playGame(3);