var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var bountyRouter = require("./routes/bountyRoutes");
var bountySchema = require("./models/bounties");

app.use(bodyParser.json());
app.use(cors());
app.use(bountyRouter);


mongoose.connect("mongodb://localhost/bounty");

app.listen(8000, function () {
    console.log("App is listening on port 8000!");
});
