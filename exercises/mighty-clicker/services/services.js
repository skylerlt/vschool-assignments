var app = angular.module("mainApp");

app.service('redService', function () {
    var totalironman = 100;

    this.addIronman = function () {
        return totalironman += 1;
    };

    this.removeIronMan = function () {
        return totalironman -= 1;
    };
});



app.service("blueService", function () {
    var totalcap = 100;

    this.addCap = function () {
        return totalcap += 1;
    };

    this.removeCap = function () {
        return totalcap -= 1;
    };
});
