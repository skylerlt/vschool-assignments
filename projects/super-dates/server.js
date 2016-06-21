var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var goodUserRouter = require("./routes/datingRoutes");
var evilUserRouter = require("./routes/evilDatingRoutes");
var goodUserSchema = require("./models/users");
var evilUserSchema = require("./models/evilUsers");
var port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost/users");

app.use(bodyParser.json());
app.use(cors());
app.use("/good-user", goodUserRouter);
app.use("/evil-user", evilUserRouter);


app.listen(port, function () {
    console.log("I'm listening to you listening to me!");
});
