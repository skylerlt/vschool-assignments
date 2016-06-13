var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectId;
var port = process.env.PORT || 5000;
var url = "mongodb://localhost:27017/exercise";
var db;

app.use(bodyParser.json());

app.get("/toys", function (req, res) {
    var collection = db.collection("toys");

    collection.find().toArray(function (err, item) {
        if (err) throw err;
        res.send(item);
    })
});

app.get("/toys/:id", function (req, res) {
    var collection = db.collection("toys");

    collection.findOne({
        _id: ObjectId(req.params.id)
    }, function (err, item) {
        if (err) throw err;
        res.send(item);
    });
});

app.post("/toys", function (req, res) {
    var collection = db.collection("toys");

    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
        res.send("Put something in silly!")
    } else {
        collection.insertOne(req.body, function (err, result) {
            if (err) throw err;
            res.send(result.ops[0]);
        });
    };
});

app.delete("/toys/:id", function (req, res) {
    var collection = db.collection("toys");

    collection.deleteOne({
        _id: ObjectId(req.params.id)
    }, function (err, result) {
        if (err) throw err;
        res.send({
            success: true,
            deleteCount: result.deleteCount
        });
    });

});

MongoClient.connect(url, function (err, database) {
    if (err) throw err;

    db = database;

    app.listen(port, function () {
        console.log("Listen to this!")
    });
});
