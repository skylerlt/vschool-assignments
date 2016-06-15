var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var userRouter = require("./routes/datingRoutes");
var userSchema = require("./models/users");
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(userRouter);

mongoose.connect("mongodb://localhost/users");

app.listen(port, function () {
    console.log("I'm listening to you listening to me!");
});
