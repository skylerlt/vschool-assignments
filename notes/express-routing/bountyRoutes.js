var express = require("express");
var bountyRoutes = express.Router();
var bounties = require("./bounties");

bountyRoutes.route("/").get(function (req, res) {
        res.send(bounties);
    })
    .post(function (req, res) {
        bounties.push(req.body);
        res.send(req.body);
    });

bountyRoutes.route("/:id")
    .get(function (req, res) {
        for (var i = 0; i < bounties.length; i++) {
            if (bounties[i].id === req.params.id) {
                return res.send(bounties[i]);
            }
        }
    })
    .put(function (req, res) {
        for (var i = 0; i < bounties.length; i++) {
            if (bounties[i].id === req.params.id) {
                bounties[i] = req.body;
                return res.send(bounties[i]);
            }
        }
        res.send("No bounty found.");
    })
    .delete(function (req, res) {
        for (var i = 0; i < bounties.length; i++) {
            if (bounties[i].id === req.params.id) {
                bounties.splice(i, 1);
                return res.send("Deleted!");
            }
        }
    });


module.exports = bountyRoutes;
