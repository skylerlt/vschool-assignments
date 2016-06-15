var express = require("express");
var bountyRouter = express.Router();
var Bounty = require("../models/bounties");


bountyRouter.get("/bounty", function (req, res) {
    Bounty.find(function (err, bounties) {
        if (err) throw err;
        res.send(bounties);
    });
});

bountyRouter.post("/bounty", function (req, res) {
    var newBounty = new Bounty(req.body);
    newBounty.save(function (err, bounty) {
        if (err) throw err;
        res.send(bounty);
    });
});

bountyRouter.delete("/bounty/:id", function (req, res) {
    Bounty.findByIdAndRemove(req.params.id, function (err, bounty) {
        if (err) throw err;
        res.send(bounty);
    });
});

bountyRouter.put("/bounty/:id", function (req, res) {
    Bounty.findById(req.params.id, function (err, bounty) {
        if (err) {
            res.status(500).send(err);
        } else {
            bounty.firstName = req.body.firstName || bounty.firstName;
            bounty.lastName = req.body.lastName || bounty.lastName;
            bounty.living = req.body.living || bounty.living;
            bounty.bountyAmount = req.body.bountyAmount || bounty.bountyAmount;
            bounty.type = req.body.type || bounty.type;

            bounty.save(function (err, bounty) {
                if (err) {
                    res.status(500).send(err)
                }
                res.send(bounty);
            });
        };
    });
});

module.exports = bountyRouter;
