const fetch = require('node-fetch')

// post.js
let userUrl = 'localhost://8081/api/customer';



async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 201) // Created
        throw new Error(respons.status);
    return await respons.json();
}

async function main(url) {
    try {
        let respons = await post(url, createUser);
        console.log(respons);
    } catch (fejl) {
        console.log(fejl);
    }
}

let createUser = {
    firstname: "testname",
    lastname: "testlastname",
    address: "testaddress",
    postalcode: "testcode",
    city:"testcity",
    plants: [{plantname : "testplantename", count: "testcount3"}],
    pickup : 1,
};

main(userUrl)