var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var cors = require("cors");
var bountyRoutes = express.Router();
var bountyRoutes = require("./bountyRoutes.js");
var bounties = require("./bounties");

app.use(bodyParser.json());
app.use(cors());
app.use("/bounty", bountyRoutes);

app.listen(8000, function () {
    console.log("App is listening on port 8000!");
});
