var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var toySchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    ageRange: [Number],
    accessories: [String]
});

module.exports = mongoose.model("Toy", toySchema);


