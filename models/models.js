const mongoose = require("mongoose");


const informationSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    address: String,
    postalcode: String,
    city:String,
    plants: [{plantname : String, count: String}],
    pickup : Boolean,
})


exports.information = mongoose.model("information",informationSchema );