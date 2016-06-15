var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var port = process.env.PORT || 4000;
var Toy = require("./models/toys");
var toyRouter = require("./routes/toyRoutes");

app.use(bodyParser.json());
app.use(toyRouter);

mongoose.connect("mongodb://localhost/toys");

//var bumblebee = new Toy({
//    brand: "Transformers",
//    price: 10000,
//    ageRange: [45, 100],
//    accessories: ["Guns", "Spinners"]
//});
//
//bumblebee.save(function (err, newToy) {
//    console.log(newToy);
//})

app.listen(port, function () {
    console.log("Sup!");
});
