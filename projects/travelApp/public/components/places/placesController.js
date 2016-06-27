var app = angular.module("mainApp");

app.controller("PlaceController", function (BeenPlacesService, GoPlacesService, $scope) {

    $scope.beenPlacesService = BeenPlacesService;
    $scope.goPlacesService = GoPlacesService;
    //    $scope.userService = UserService;

    //    Been Places

    (function getBeenThere() {
        BeenPlacesService.getBeenPlaces().then(function () {})
    })();

    $scope.postBeenThere = function (beenPlace) {
        BeenPlacesService.postBeenPlaces(beenPlace).then(function () {
            $scope.beenPlace = null;
        });
    };

    //    Go Places

    (function getGoThere() {
        GoPlacesService.getGoPlaces().then(function () {})
    })();


    $scope.postGoThere = function (goPlace) {
        GoPlacesService.postGoPlaces(goPlace).then(function () {
            $scope.goPlace = null;
        });
    };

    $scope.updateGoThere = function (goPlace) {
        GoPlacesService.putGoPlaces(goPlace)
            .then(function (goPlacesArray) {
                $scope.goPlaces = GoPlacesService.goPlacesArray;
                been.add = false;
            })
    }
});
