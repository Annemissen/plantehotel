/**
 * Function for initializing the reservations list
 */
async function initResaervationsList() {
    let reservations = await get("/reservations/allCustomers"); // getting the reservations from the database

    //Converting the r.date to a readable string
    for (r of reservations) {
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
        let customer = await get("/reservations/specific/" + phoneNumber);

        //Converting the customer.date to a readable string
        let date = new Date(customer.date); // creating a new date object by using the date form the reservation
        date = date.toLocaleDateString('de-DE'); // formatting the date to dd.mm.yyyy
        customer.date = date; // setting the date of the reservation to the newly created and formatted date object     

        // Generating and setting html for the reservationsList #selectedCustomer div
        let customerHtml = await generateCustomerInfo(customer);
        let customerInfoDiv = document.getElementById('selectedCustomer');
        customerInfoDiv.innerHTML = customerHtml;
    } catch (error) {
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
        c.addEventListener("click", function() {
            displayCustomer(customer.id);
        });
    }
}

/**
 * Delete reservation button method
 */
async function deleteReservation(){
    let customer = document.getElementById('selectedCustomer')
    console.log(customer.children[1].innerHTML)
    let number = customer.children[1].innerHTML
    console.log(number)

    var c = confirm("Vil du slette "+customer.children[0].innerHTML+"?")
    if(c==true){
        let statusCode = await fetch("/reservations/removeCustomer/"+number, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
        if(statusCode.status===200){
        let elem = document.getElementById(number);
        elem.parentNode.removeChild(elem);
        let elem2 = document.getElementById("selectedCustomer")
        elem2.innerHTML=""
        } else {
            console.log("delete error")
        }
        
    } else {
        // nothing
    }

}


/**
 * Make a search
 */
const customerSearch = async() => {
    let searchField = document.getElementById("søgpersoner").value;
    let reservations = await get("/reservations/allCustomers"); // getting the reservations from the database

    let array = [];

    for (r of reservations) {
        if (r.firstname === searchField) {
            array.push(r);
        } else if (r.mobile === parseInt(searchField)) {
            array.push(r);
            console.log(array);
        } else if (r.email === searchField) {
            array.push(r);
            console.log(array);
        }
    }
    // Generating and setting html for the reservationsList
    let reservationItemsHtml = await generateAllReservations(array);
    let reservationsList = document.getElementById("reservationsList");
    reservationsList.innerHTML = reservationItemsHtml;
    addEventListenersToListItems();
}

/**
 * Clear search
 */
const searchClear = async() => {
    await initResaervationsList();
    addEventListenersToListItems();
}


async function main() {
    await initResaervationsList();
    addEventListenersToListItems();
}

main();