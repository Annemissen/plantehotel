const mongoose = require("mongoose");

//boolean must be 1 or 0;

const informationSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    address: String,
    postalcode: String,
    city: String,
    plants: [{plantname : String, count: String}],
    pickup : Boolean,
})


module.exports = mongoose.model("information",informationSchema );