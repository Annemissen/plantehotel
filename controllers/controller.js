const mongoose = require('mongoose');
const models = require('../models/models')

const config = require('../config');
const uri ="mongodb +  srv://Grothen:p4ndek4gek0ngen@cluster0.abwhj.mongodb.net/PlantsDB?retryWrites=true&w=majority"

mongoose.connect(config.databaseURI, {useNewUrlParser: true, useUnifiedTopology: true});


async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

exports.createCustomer = function(){
    
    return models.create({
        firstname,
        lastname,
        address,
        postalcode,
        city,
        plants,
        pickup
    })

}
