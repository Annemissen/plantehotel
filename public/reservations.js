/**
 * Function for initializing the reservations list
 */
async function initResaervationsList() {
    let reservations = await get("/api/customers/allCustomers"); // getting the reservations from the database

    //Converting the r.date to a readable string
    for (r of reservations){
        let date = new Date(r.date); // creating a new date object by using the date form the reservation
        date = date.toLocaleDateString('de-DE'); // formatting the date to dd.mm.yyyy
        r.date = date; // setting the date of the reservation to the newly created and formatted date object
    }

    // Generating and setting html for the reservationsList
    let reservationItemsHtml = await generateAllReservations(reservations); 
    let reservationsList = document.getElementById("reservationsList");
    reservationsList.innerHTML = reservationItemsHtml;
}

/**
 * Generates html list items (li) for the #reservationsList ul
 */
async function generateAllReservations(reservation) {
    let template = await getText('/reservations.hbs');
    let compiledTemplate = Handlebars.compile(template);
    return compiledTemplate({ reservation });
}

/**
 * get.js
 * @param {*} url 
 */
async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

/**
 * Generates html for the #selectedCustomer div
 * @param {*} customer 
 */
async function generateCustomerInfo(customer) {
    let template = await getText('/customerInfo.hbs');
    let compiledTemplate = Handlebars.compile(template);
    return compiledTemplate({ customer });
}

/**
 * Used for getting the text/template in .hbs file
 * @param {*} url 
 */
async function getText(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.text();
}

/**
 * Function for displaying reservation-info/customer-info
 * @param {*} phoneNumber 
 */
async function displayCustomer(phoneNumber) {
    try {
        let customer = await get("/api/customers/specific/" + phoneNumber);

        //Converting the customer.date to a readable string
        let date = new Date(customer.date); // creating a new date object by using the date form the reservation
        date = date.toLocaleDateString('de-DE'); // formatting the date to dd.mm.yyyy
        customer.date = date; // setting the date of the reservation to the newly created and formatted date object     

        // Generating and setting html for the reservationsList #selectedCustomer div
        let customerHtml = await generateCustomerInfo(customer);
        let customerInfoDiv = document.getElementById('selectedCustomer');
        customerInfoDiv.innerHTML = customerHtml;
    }
    catch (error) {
        console.error(error.name + ": " + error.message);
    }
}

/**
 * Adds an eventlistener to each item/customer/reservation in the reservations-list
 */
function addEventListenersToListItems() {
    let customers = document.getElementsByClassName("reservation");
    for (c of customers) {
        let customer = document.getElementById(c.id);
        c.addEventListener("click", function () {
            displayCustomer(customer.id);
        });
    }
}

async function main() {
        await initResaervationsList();
        addEventListenersToListItems();
}

main();
