//const elements = document.querySelectorAll('input,button');
// const firstnameInputField   = document.getElementById("name-input");
// const lastanameInputField   = document.getElementById("lastname-input");
// const zipInputField  = document.getElementById("zip-code-input");
// const cityInputField  = document.getElementById("city-input");
// const addressInputField   = document.getElementById("address-input");
// const numberInputField   = document.getElementById("number-input");
// const emailInputField  = document.getElementById("email-input");
// const plantNameInputField  = document.getElementById("plantName");
// const numberOfPlantsInputField  = document.getElementById("numberOfPlants");

const mongoose = require('mongoose');
const model = require('../models/models')
const { firstname, lastname, address, postalcode, city, plantname, plantcount, pickup, mobile, email } = model;
const fetch = require('node-fetch');
const { databaseURI } = require('../config');
const test = require('../public/regexVertify.js')



mongoose.connect(databaseURI, { useNewUrlParser: true, useUnifiedTopology: true });


async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

exports.createCustomer = async function (body) {
    const { firstname, lastname, address, postalcode, city, mobile, email, pickup, plants,date } = body;

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


exports.getAllCustomers = function () {
    return model.find().exec();
};

exports.findCustomer = function (number) {
    return model.findOne({ mobile: number},function (err,model){
        if (err) return handleError(err);
    })
}


// exports.testRegX  =async function (){
//     //fornavn
//     let bolian = true;

//     if (!/^[a-zA-Zæøå]+$/.test(firstnameInputField.value)){
//     firstnameInputField.style.backgroundColor = "red"
//     bolian = false;
//     }
//     else if (/^[a-zA-Zæøå]+$/.test(firstnameInputField.value))
//     firstnameInputField.style.backgroundColor = "#EDDCD2"

//     //efternavn
//     if (!/^[a-zA-Zæøå]+$/.test(lastanameInputField.value)){
//     lastanameInputField.style.backgroundColor = "red"
//     bolian = false;
// }

//     else if (/^[a-zA-Z]+$/.test(lastanameInputField.value))
//     lastanameInputField.style.backgroundColor = "#EDDCD2"

//     //postnummer
//     if (!/^[0-9]{4}$/.test(zipInputField.value)){ 
//     zipInputField.style.backgroundColor = "red"
//     bolian = false;    
//     }
//     else if (/^[0-9]{4}$/.test(zipInputField.value))
//     zipInputField.style.backgroundColor = "#EDDCD2"

//     //By
//     if (!/^[-\sa-zA-Zæøå]+$/.test(cityInputField.value)){
//         cityInputField.style.backgroundColor = "red"
//         bolian = false;
//     }
//     else if (/^[-\sa-zA-Zæøå]+$/.test(cityInputField.value))
//         cityInputField.style.backgroundColor = "#EDDCD2"
//         //vej og hus nr

//     if (!/^[-\sa-zA-Zæøå]+\s[0-9] $/.test(addressInputField.value)){
     
//         addressInputField.style.backgroundColor = "red"
//         bolian = false;
//     }
//     else if (/^[-\sa-zA-Zæøå]+\s[0-9]$/.test(addressInputField.value))
//         addressInputField.style.backgroundColor = "#EDDCD2"
//         //Mobil nummer (element 5)
//         /*
//         //uden mellemrum
//         /^[-\s0-9]{11}$/
//         */

//     //med mellemrum
//     if (!/^[0-9]{8}$/.test(numberInputField.value)){
//         numberInputField.style.backgroundColor = "red"
//         bolian = false;
//     }
//         else if (/^[0-9]{8}$/.test(numberInputField.value))
//         numberInputField.style.backgroundColor = "#EDDCD2"

//     //email
//     if (!/^[\w-æøå\.]+@([\w-æøå]+\.)+[\w-æøå]{2,4}$/.test(emailInputField.value)){
//         emailInputField.style.backgroundColor = "red"
//         bolian = false;
//     }
//     else if (/^[\w-æøå\.]+@([\w-æøå]+\.)+[\w-æøå]{2,4}$/.test(emailInputField.value)){
//         emailInputField.style.backgroundColor = "#EDDCD2";
//     }
//         return bolian;
//     }



//address: address,
//postalcode: postalcode,
//city: city,
//mobile: mobile,
//email: email,
//plants: [{ plantname: plantname, plantcount: plantcount }],
//pickup: pickup,

