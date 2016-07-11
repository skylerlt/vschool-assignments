var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var morgan = require("morgan");
var config = require("./config");
var port = process.env.PORT || 4000;
var path = require("path");

mongoose.connect(config.database, function () {
    console.log("Mongoose is chasing the snake!");
});

mongoose.connection.on("connected", function () {
    console.log("Pop goes the weasel");
});

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/auth", require("./routes/authRoutes"));




app.listen(port, function () {
    console.log("Did you hear that?  Sounded like port " + port);
});
