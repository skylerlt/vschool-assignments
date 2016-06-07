var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

app.listen(8000, function () {
    console.log("I hear you!");
})

var todoList = [
    {
        "name": "Get milk",
        "description": "Go to the store and get it!",
        "imageUrl": "http://kingofwallpapers.com/milk/milk-006.jpg",
        "completed": false
    }
];

app.get("/todo", function (req, res) {
    res.send(todoList)
});

app.post("/todo", function (req, res) {
    req.body.id = uuid.v4();
    todoList.push(req.body);
    res.send(req.body);
});

app.delete("/todo/:todoId", function (req, res) {
    for (var i = 0; i < todoList.length; i++) {
        if (todoList[i].id === req.params.todoId) {
            todoList.splice(i, 1);
            res.send("Deleted, son!");
        }
    }
});
