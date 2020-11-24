const address_label = document.getElementById("address-label");

const firstnameInputField = document.getElementById("name-input");
const lastanameInputField = document.getElementById("lastname-input");
const zipInputField = document.getElementById("zip-code-input");
const cityInputField = document.getElementById("city-input");
const addressInputField = document.getElementById("address-input");
const numberInputField = document.getElementById("number-input");
const emailInputField = document.getElementById("email-input");
const plantNameInputField = document.getElementById("plantName");
const numberOfPlantsInputField = document.getElementById("numberOfPlants");



function testRegX() {
    //fornavn

    let bolian = true;

    if (!/^[-\sa-zA-Zæøå]+$/.test(firstnameInputField.value)) {
        firstnameInputField.style.backgroundColor = "red"
        bolian = false;
    } else if (/^[-\sa-zA-Zæøå]+$/.test(firstnameInputField.value)) {
        firstnameInputField.style.backgroundColor = "#EDDCD2"

    }
    //efternavn
    if (!/^[a-zA-Zæøå]+$/.test(lastanameInputField.value)) {
        lastanameInputField.style.backgroundColor = "red"
        bolian = false;
    } else if (/^[a-zA-Z]+$/.test(lastanameInputField.value)) {
        lastanameInputField.style.backgroundColor = "#EDDCD2"

    }
    //postnummer
    if (!/^[0-9]{4}$/.test(zipInputField.value)) {
        zipInputField.style.backgroundColor = "red"
        bolian = false;
    } else if (/^[0-9]{4}$/.test(zipInputField.value)) {
        zipInputField.style.backgroundColor = "#EDDCD2"
    }
    //By
    if (!/^[-\sa-zA-Zæøå]+$/.test(cityInputField.value)) {
        cityInputField.style.backgroundColor = "red"
        bolian = false;
    } else if (/^[-\sa-zA-Zæøå]+$/.test(cityInputField.value)) {
        cityInputField.style.backgroundColor = "#EDDCD2"

    }
    //vej og hus nr
    if (!/^[\sa-zA-Zæøå]+\s[0-9]{1,4}$/.test(addressInputField.value)) {

        addressInputField.style.backgroundColor = "red"
        bolian = false;
    } else if (/^[-\sa-zA-Zæøå]+\s[0-9]{1,4}$/.test(addressInputField.value)) {
        addressInputField.style.backgroundColor = "#EDDCD2"
            //Mobil nummer (element 5)
            /*
            //uden mellemrum
            /^[-\s0-9]{11}$/
            */

        //med mellemrum
    }
    if (!/^[0-9]{8}$/.test(numberInputField.value)) {
        numberInputField.style.backgroundColor = "red"
        bolian = false;
    } else if (/^[0-9]{8}$/.test(numberInputField.value)) {
        numberInputField.style.backgroundColor = "#EDDCD2"

    }
    //email
    if (!/^[\w-æøå\.]+@([\w-æøå]+\.)+[\w-æøå]{2,4}$/.test(emailInputField.value)) {
        emailInputField.style.backgroundColor = "red"
        bolian = false;
    } else if (/^[\w-æøå\.]+@([\w-æøå]+\.)+[\w-æøå]{2,4}$/.test(emailInputField.value)) {
        emailInputField.style.backgroundColor = "#EDDCD2";

    }
    console.log('bolian value ' + bolian);
    return bolian;

}

const createCustomer = async() => {
    //testRegX();

    if (testRegX() === true) {
        let firstname = document.getElementById("name-input").value;
        let lastname = document.getElementById("lastname-input").value;
        let address = document.getElementById("address-input").value;
        let city = document.getElementById("city-input").value;
        let postalcode = document.getElementById("zip-code-input").value;
        let mobile = document.getElementById("number-input").value;
        let email = document.getElementById("email-input").value;
        plants
        let date = document.getElementById("datepicker").value






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
                date: date,
            }),

        });
    }

}

const getCustomers = async() => {
    const Customers = await fetch("/api/customers");
    return await Customers.json();
};

async function getcustomerInfo(id) {
    custom = await (await fetch('api/customers/' + id));

}