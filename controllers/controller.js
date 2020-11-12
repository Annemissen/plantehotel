const mongoose = require('mongoose');
const models = require('../models/models')

const config = require('../config');
const customers = require('../models/models.js')


const uri ="mongodb +  srv://Grothen:p4ndek4gek0ngen@cluster0.abwhj.mongodb.net/PlantsDB?retryWrites=true&w=majority"

mongoose.connect(config.databaseURI, {useNewUrlParser: true, useUnifiedTopology: true});


async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

exports.createCustomer = async function(body){
    const {firstname,lastname,address,postalcode,city,plantname,plantcount,pickup,mobile,email} = body;

    let res = await customers.information.create({
        firstname: firstname,
        lastname: lastname,
        address: address,
        postalcode : postalcode,
        city: city,
        mobile: mobile,
        email: email,
        plants:[{plantname: plantname, plantcount:plantcount}],
        pickup : pickup,
        
    });
    return res;

}
