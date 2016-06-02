var app = angular.module("mainApp", ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/computers", {
            templateUrl: "pages/computer.html",
            controller: "MainController"
        })
        .when("/other", {
            templateUrl: "pages/other.html",
            controller: "OtherController"
        })

});

app.controller("MainController", function ($scope) {

    $scope.computerList = [
        {
            name: "Macbook Pro",
            price: 1999.99,
            image: "http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/M/AC/MACBOOKPRO/MACBOOKPRO?wid=1200&hei=630&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=jBFkr3"
        },
        {
            name: "Iphone 6s",
            price: 599.99,
            image: "http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone6/select/iphone6-select-2014_GEO_US?wid=1200&hei=630&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=jBykt3"
        },
        {
            name: "Star Trek Communicator",
            price: 33.99,
            image: "http://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2015/07/07/102815067-Untitled1.530x298.jpg?v=1436295299"
        },
        {
            name: "Jarvis",
            price: 10000000000,
            image: "http://vignette4.wikia.nocookie.net/marvelmovies/images/0/06/J.A.R.V.I.S..jpg/revision/latest?cb=20130421191808"
        }

    ];

});

app.controller("OtherController", function ($scope) {

    $scope.otherList = [
        {
            name: "Vizio 60 in 4k",
            price: 919.99,
            image: "http://cdn-cf.vizio.com/catalog/product/cache/1/image/740x440/9df78eab33525d08d6e5fb8d27136e95/m/-/m-series_03_6.jpg"
        },
        {
            name: "Philips Wireless surround sound",
            price: 88.09,
            image: "https://cnet1.cbsistatic.com/hub/i/r/2014/02/24/1a1f6cba-cbf2-11e2-9a4a-0291187b029a/thumbnail/770x433/ebbb9e5900e4f12746b0d12a06a6b338/440x330_1.jpg"
        },
        {
            name: "Iron Man Armour",
            price: 7000000000000,
            image: "https://buyfullbodyarmors.com/media/posts/mk43_banner2.png"
        },
        {
            name: "Batwing",
            price: 10000000000,
            image: "http://3.bp.blogspot.com/-hr8a-VthZb4/VUOdPYOyzQI/AAAAAAAAiPg/AtnkfU-dZLY/s1600/Batman%2Bv%2BSuperman%2B-%2BDawn%2Bof%2BJustice%2B-%2BDC%2BComics%2B-%2BFirst%2BLook%2BBatwing.jpg"
        },
        {
            name: "Talbot Lago",
            price: 134000,
            image: "http://www.motorstown.com/images/talbot-lago-t150-ss-07.jpg"
        },
        {
            name: "Adamantium Claws",
            price: 150000000,
            image: "https://www.screenused.com/images/auction_nov13/13926_3.jpg"
        },
        {
            name: "The Milano",
            price: 200000000000,
            image: "http://4.bp.blogspot.com/-r0puvOgULNE/VkoWQJgsK1I/AAAAAAAAZsA/VCiv8ZhKcxA/s1600/Guardians%2Bof%2Bthe%2BGalaxy%2BMilano%2Ba.jpg"
        }
    ];

})

app.directive("techWishList", function () {

    return {
        templateUrl: "directives/techWishList.html",
        scope: {
            tech: "="
        },
        restrict: "E"
    };

})