const mongoose = require('mongoose');
// const model

const config = require('../config');
const uri ="mongodb +  srv://Grothen:p4ndek4gek0ngen@cluster0.abwhj.mongodb.net/PlantsDB?retryWrites=true&w=majority"

//mongoose.connect(config.databaseURI, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}
