const mongoose = require("mongoose");

//boolean must be 1 or 0;

const informationSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    address: String,
    postalcode: String,
    city: String,
    mobile: Number,
    email: String,
    plants: [String],
    pickup: Boolean,
    date : Date
})

module.exports = mongoose.model("information", informationSchema);