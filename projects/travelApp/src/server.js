var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var morgan = require("morgan");
var config = require("./config");
var path = require("path");
var beenPlacesSchema = require("./models/beenPlaces");
var goPlacesSchema = require("./models/goPlaces");
var port = process.env.PORT || 8000;
var expressJwt = require("express-jwt");

mongoose.connect(config.database, function () {
    console.log("Mongoose is catching the snake!")
});

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api", expressJwt({
    secret: config.secret
}));

app.use("/auth", require("./routes/authRoutes"));
app.use("/api/been-places", require("./routes/beenPlaceRoutes"));
app.use("/api/go-places", require("./routes/goPlaceRoutes"));

app.listen(port, function () {
    console.log("Can you hear me hearing you?");
});
