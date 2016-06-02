var app = angular.module("mainApp");

app.service("AppService", function ($http) {

    var baseUrl = "http://www.omdbapi.com/?t=";
    var lastUrl = "&y=&plot=short&r=json";

    this.getMovie = function (input) {
        var myMovie = {};
        return $http.get(baseUrl + input + lastUrl)
            .then(function (response) {
                myMovie.title = response.data.Title;
                myMovie.released = response.data.Released;
                myMovie.rated = response.data.Rated;
                myMovie.director = response.data.Director;
                myMovie.actors = response.data.Actors;
                myMovie.plot = response.data.Plot;
                return myMovie;
            })
    }
})

app.service("MoreService", function ($http) {

    var baseUrl = "http://www.omdbapi.com/?t=";
    var lastUrl = "&y=&plot=short&r=json";

    this.moreMovies = function (moreInput) {
        var moreMovie = {};
        return $http.get(baseUrl + moreInput + lastUrl)
            .then(function (response) {
                moreMovie.title = response.data.Title;
                moreMovie.runtime = response.data.Runtime;
                moreMovie.genre = response.data.Genre;
                moreMovie.writer = response.data.Writer;
                moreMovie.language = response.data.Language;
                moreMovie.awards = response.data.Awards;
                return moreMovie;
            })
    }
})