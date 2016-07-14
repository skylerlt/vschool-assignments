var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var exerciseSchema = new Schema({

    title: String,
    image: String,
    body: String,
    instructImg: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

});

module.exports = mongoose.model("Exercises", exerciseSchema);
