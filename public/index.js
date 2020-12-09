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
const plantsSelector = document.getElementById("plants");
const plantsLabel = document.getElementById("plantsLabel");
const popup = document.getElementById("popup-content");
const popupHeader = document.getElementById("popup-header");
const status = document.getElementById("status");
const overlay = document.getElementById("overlay");
const checkBox = document.getElementById("rulesCheckBox");
const rolesLabel = document.getElementById("rulesLabel");


function testRegX() {

    let bolian = true;
    //fornavn
    if (!/^[-\sa-zA-ZæøåÆØÅäöüÄÖÜ]+$/.test(firstnameInputField.value)) {
        firstnameInputField.style.backgroundColor = "red"
        bolian = false;
    } else if (/^[-\sa-zA-ZæøåÆØÅäöüÄÖÜ]+$/.test(firstnameInputField.value)) {
        firstnameInputField.style.backgroundColor = "#EDDCD2"

    }

    //efternavn
    if (!/^[a-zA-ZæøåÆØÅäöüÄÖÜ]+$/.test(lastanameInputField.value)) {
        lastanameInputField.style.backgroundColor = "red"
        bolian = false;
    } else if (/^[a-zA-ZæøåÆØÅäöüÄÖÜ]+$/.test(lastanameInputField.value)) {
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
    if (!/^[-\sa-zA-ZæøåÆØÅ]+$/.test(cityInputField.value)) {
        cityInputField.style.backgroundColor = "red"
        bolian = false;
    } else if (/^[-\sa-zA-ZæøåÆØÅ]+$/.test(cityInputField.value)) {
        cityInputField.style.backgroundColor = "#EDDCD2"
    }

    //vej og hus nr
    if (!/^[-\sa-zA-ZæøåÆØÅ]+\s[0-9]{1,4}$/.test(addressInputField.value)) {

        addressInputField.style.backgroundColor = "red"
        bolian = false;
    } else if (/^[-\sa-zA-ZæøåÆØÅ]+\s[0-9]{1,4}$/.test(addressInputField.value)) {
        addressInputField.style.backgroundColor = "#EDDCD2"
    }

    //uden mellemrum
    if (!/^[0-9]{8}$/.test(numberInputField.value)) {
        numberInputField.style.backgroundColor = "red"
        bolian = false;
    } else if (/^[0-9]{8}$/.test(numberInputField.value)) {
        numberInputField.style.backgroundColor = "#EDDCD2"

    }

    //email
    if (!/^[æøåÆØÅäöüÄÖÜ\w-\.]+@([æøåÆØÅäöüÄÖÜ\w-]+\.)+[\w-]{2,4}$/.test(emailInputField.value)) {
        emailInputField.style.backgroundColor = "red"
        bolian = false;
    } else if (/^[æøåÆØÅäöüÄÖÜ\w-\.]+@([æøåÆØÅäöüÄÖÜ\w-]+\.)+[\w-]{2,4}$/.test(emailInputField.value)) {
        emailInputField.style.backgroundColor = "#EDDCD2";

    }

    if (plantsSelector.innerText === "") {
        plantsLabel.style.color = "red";
        plantsLabel.style.backgroundColor = "black";
        bolian = false;
    } else {
        plantsLabel.style.color = "black";
        plantsLabel.style.backgroundColor = "#A5A58D";
    }
    if (checkBox.checked) {

        rulesLabel.style.color = "black";
        rulesLabel.style.backgroundColor = "#A5A58D";
    } else {

        rulesLabel.style.color = "red";
        rulesLabel.style.backgroundColor = "black";

        bolian = false;
    }

    if (bolian) {
        popup.style.display = "grid"
        overlay.style.display = "block"
        popupHeader.style.backgroundColor = "green";
        status.innerText = "Godkedt"
    } else {
        popup.style.display = "grid";
        overlay.style.display = "block";
        popupHeader.style.backgroundColor = "red";
        status.innerText = "Ikke godkedt"
    }

    return bolian;
}

const createCustomer = async() => {


    if (testRegX() === true) {
        let firstname = document.getElementById("name-input").value;
        let lastname = document.getElementById("lastname-input").value;
        let address = document.getElementById("address-input").value;
        let city = document.getElementById("city-input").value;
        let postalcode = document.getElementById("zip-code-input").value;
        let mobile = document.getElementById("number-input").value;
        let email = document.getElementById("email-input").value;
        let pickup = document.getElementById('pickupCheckBox').checked;
        let date = document.getElementById("datepicker").value;

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
                pickup: pickup,
                date: date
            }),
        });
    }
}

function hidepopup() {
    popup.style.display = "none";
    overlay.style.display = "none";
}


function addEventListenersToBtns() {
    let popupBtn = document.getElementById('hidepopupBtn');
    popupBtn.addEventListener("click", hidepopup);

    let sendBtn = document.getElementById('send-button');
    sendBtn.addEventListener("click", createCustomer);
}

addEventListenersToBtns();