function isShip() {
    var num = Math.floor(Math.random() * 5) +1;
    return num === 1;
}

function Location() {
    this.ship = isShip();
    this.hit = false;
    this.display = "~";
};

module.exports = Location;
