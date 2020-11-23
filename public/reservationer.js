/*Function til at initialisere listen over reservationer */
async function initResaervationsList(){

}

function addEventListenersToListItems(){

    let customer = document.getElementsByClassName("reservation");
    for (c of customer){
        c.addEventListener("click", function(){
            displayCustomer(c.id);
        });
    }
}

async function generateAllCustomerInfo(customer) {
    let template = await getText('/customerInfo.hbs');
    let compiledTemplate = Handlebars.compile(template);
    return compiledTemplate({ customer });
}

async function getText(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.text();
}

async function displayCustomer(phoneNumber){
    console.log("print ved click");
    console.log('tlf: ' + phoneNumber);
    
    try {

        let customer = await get("/api/customers/" + phoneNumber);
        console.log('customer: ' + customer.plants[3]);
        
        let customerHtml = await generateAllCustomerInfo(customer);
        console.log(customerHtml);
        let customerInfoDiv = document.getElementById('selectedCustomer');
        customerInfoDiv.innerHTML = customerHtml;
    }
    catch (error){
        console.error(error.name + ": " + error.message);
    }
    
}

// get.js
async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

function main(){
    addEventListenersToListItems();
}

main();


//-----------------------
let customerTestObj = {
    firstname: "Anders",
    lastname: "Andersen",
    address: "Helsingforsgade 12",
    city: "Aarhus",
    postalcode: "8200",
    mobile: "28376450",
    email: "anders@andersen.com",
    pickup: "27/11/2020",
    plants: ["hortensia, stk. 10", "oliventræ, stk. 1"]
}