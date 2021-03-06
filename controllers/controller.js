const mongoose = require('mongoose');
const model = require('../models/models')
const { firstname, lastname, address, postalcode, city, plantname, plantcount, pickup, mobile, email } = model;
const fetch = require('node-fetch');
const { databaseURI } = require('../config');


mongoose.connect(databaseURI, { useNewUrlParser: true, useUnifiedTopology: true });


async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

exports.createCustomer = async function(body) {
    const { firstname, lastname, address, postalcode, city, mobile, email, pickup, plants, date } = body;

    let res = model.create({
        firstname: firstname,
        lastname: lastname,
        address: address,
        city: city,
        postalcode: postalcode,
        mobile: mobile,
        email: email,
        pickup: pickup,
        plants: plants,
        date: date,
    });
    return res;
}


exports.removeCustomer = function (number) {
    return model.deleteOne({mobile: number}
    )}


exports.getAllCustomers = function() {
    return model.find().exec();
};

exports.findCustomer = function(number) {
    return model.findOne({ mobile: number }, function(err, model) {
        if (err) return handleError(err);
    })
}

exports.findCustomerOnName = function(name) {
    let array = [];
    array = model.find({ firstname: name }, function(err, model) {
        if (err) return handleError(err);
    })
    return array;
}

exports.findCustomerOnEmail = function(mail) {
    return model.findOne({ email: mail }, function(err, model) {
        if (err) return handleError(err);
    })
}