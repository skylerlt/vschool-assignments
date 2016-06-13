var express = require("express");
var app = express();
var MongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectId;
var bodyParser = require("body-parser");
var port = process.env.PORT || 5000;
var url = "mongodb://localhost:27017/practice";
var db;

app.use(bodyParser.json());

app.get("/apples", function (req, res) {
    var collection = db.collection("apples");

    collection.find().toArray(function (err, items) {
        if (err) throw err;
        res.send(items);
    });
});

app.get("/apples/:id", function (req, res) {
    var collection = db.collection("apples");
    collection.findOne({
        _id: ObjectId(req.params.id)
    }, function (err, item) {
        if (err) throw err;
        res.send(item);
    })
})

app.post("/apples", function (req, res) {
    var collection = db.collection("apples");

    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
        res.send("You need to add something in there! ");
    } else {
        collection.insertOne(req.body, function (err, result) {
            if (err) throw err;
            res.send(result.ops[0]);
        })
    }

});

app.delete("/apples/:id", function (req, res) {
    var collection = db.collection("apples");
    collection.deleteOne({
        _id: ObjectId(req.params.id)
    }, function (err, result) {
        if (err) throw err;
        res.send({
            success: true,
            deleteCount: result.deletedCount
        });
    })
})

MongoClient.connect(url, function (err, database) {
    if (err) throw err;

    db = database;

    app.listen(port, function () {
        console.log("I'm listenin bro!")
    });
});
