var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var morgan = require("morgan");
var config = require("./config");
var path = require("path");
var port = process.env.PORT || 5000;
var expressJwt = require("express-jwt");

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

app.use("/api", expressJwt({
    secret: config.secret
}));

app.use("/auth", require("./routes/authRoutes"));

app.use("/api/tips", require("./routes/tipsRouter"));
app.use("/api/upperBody", require("./routes/exerciseRouter"));
app.use("/api/lowerBody", require("./routes/exerciseRouter"));

app.listen(port, function () {
    console.log("Did you hear that?  Sounded like port " + port);
});
