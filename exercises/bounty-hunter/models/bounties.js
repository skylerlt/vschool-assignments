var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var bountySchema = new Schema({
    firstName: String,
    lastName: String,
    living: Boolean,
    bountyAmount: Number,
    type: String

});

module.exports = mongoose.model("Bounty", bountySchema);
