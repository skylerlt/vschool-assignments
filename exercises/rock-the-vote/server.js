var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var uuid = require("uuid");
var commentRoutes = require("./route");

app.use(bodyParser.json());
app.use(cors());
app.use("/posts", commentRoutes);

app.listen(8000, function () {
    console.log("I'm listening to you listening to me!")
});
