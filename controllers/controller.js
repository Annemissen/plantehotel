const mongoose = require('mongoose');
const model = require('../models/models')
const { firstname, lastname, address, postalcode, city, plantname, plantcount, pickup, mobile, email } = model;
const config = require('../config');
const customers = require('../models/models.js')
const fetch = require('node-fetch');
const { databaseURI } = require('../config');




const URI = 'mongodb +  srv://Grothen:p4ndek4gek0ngen@cluster0.abwhj.mongodb.net/PlantsDB?retryWrites=true&w=majority'

mongoose.connect(databaseURI, { useNewUrlParser: true, useUnifiedTopology: true });


async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

exports.createCustomer = async function (body) {
    const { firstname, lastname, address, postalcode, city, mobile, email } = body;

    let res = await customers.information.create({
        firstname: firstname,
        lastname: lastname,
        address: address,
        city: city,
        postalcode: postalcode,
        mobile: mobile,
        email: email,

    });
    return res;
}

exports.getCustomers = async function(){
    return await model.information.find();
}

//address: address,
//postalcode: postalcode,
//city: city,
//mobile: mobile,
//email: email,
//plants: [{ plantname: plantname, plantcount: plantcount }],
//pickup: pickup,