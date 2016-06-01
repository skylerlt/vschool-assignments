var app = angular.module("mainApp");

app.service('redService', function () {
    var totalironman = 100;
    var totalcap = 100;

    this.addIronman = function () {
        return totalironman += 1;
        return totalcap -= 1;
        if (totalcap === -1) {
            return totalcap = 100;
        }
    };
});



app.service("blueService", function () {
    var totalcap = 100;
    var totalironman = 100;

    this.addCap = function () {
        return totalcap += 1;
        return totalironman -= 1;
        if (totalironman === -1) {
            return totalironman = 100;
        }
    };
});