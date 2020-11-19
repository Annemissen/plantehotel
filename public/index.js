

const address_label = document.getElementById("address-label");



const createCustomer = async () => {
    let firstname = document.getElementById("name-input").value;
    let lastname = document.getElementById("lastname-input").value;
    let address = document.getElementById("address-input").value;
    let city = document.getElementById("city-input").value;
    let postalcode = document.getElementById("zip-code-input").value;
    let mobile = document.getElementById("number-input").value;
    let email = document.getElementById("email-input").value;
    //let plantcount = document.getElementById("numberOfPlants").value;
    let plants = getPlants();


    let newcustomer = await fetch("/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            address: address,
            city: city,
            postalcode: postalcode,
            mobile: mobile,
            email: email,
            plants: plants,

        }),
    });

}

const getCustomers = async () => {
    const Customers = await fetch("/api/customers");
    return await Customers.json();
};

async function getcustomerInfo(id) {
    custom = await (await fetch('api/customers/' + id));

}


