var bigEnemy = "Ancient Dragon";
var medEnemy = "Prowler";
var smallEnemy = "Mighty Grunt"

function Enemy() {
    this.type = enemyType();
    this.hitPoints = chooseHitPoints(this.type);
    this.defense = this.hitPoints * 3;
};

function generateEnemy(howMany) {
    var enemyArray = [];
    for (var i = 0; i < howMany; i++) {
        var enemy = new Enemy();
        enemyArray.push(enemy);
    }
    return enemyArray;
};

function enemyType() {
    var randomInt = Math.floor((Math.random() * 3) + 1)
    if (randomInt === 1) {
        return bigEnemy;
    } else if (randomInt === 2) {
        return medEnemy;
    } else {
        return smallEnemy;
    }
};

function chooseHitPoints(type) {
    if (type === bigEnemy) {
        return getRandomInt(80, 100)
    } else if (type === medEnemy) {
        return getRandomInt(50, 79)
    } else {
        return getRandomInt(20, 49)
    }
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(generateEnemy(5));