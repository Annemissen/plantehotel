
const address_label = document.getElementById("address-label");
console.log(address_label.innerText.length)

const firstnameInputField   = document.getElementById("name-input");
const lastanameInputField   = document.getElementById("lastname-input");
const zipInputField  = document.getElementById("zip-code-input");
const cityInputField  = document.getElementById("city-input");
const addressInputField   = document.getElementById("address-input");
const numberInputField   = document.getElementById("number-input");
const emailInputField  = document.getElementById("email-input");
const plantNameInputField  = document.getElementById("plantName");
const numberOfPlantsInputField  = document.getElementById("numberOfPlants");

    function testRegX (){
    //fornavn
    let bolian = true;

    if (!/^[a-zA-Zæøå]+$/.test(firstnameInputField.value)){
    firstnameInputField.style.backgroundColor = "red"
    bolian = false;
    }
    else if (/^[a-zA-Zæøå]+$/.test(firstnameInputField.value))
    firstnameInputField.style.backgroundColor = "#EDDCD2"

    //efternavn
    if (!/^[a-zA-Zæøå]+$/.test(lastanameInputField.value)){
    lastanameInputField.style.backgroundColor = "red"
    bolian = false;
}

    else if (/^[a-zA-Z]+$/.test(lastanameInputField.value))
    lastanameInputField.style.backgroundColor = "#EDDCD2"

    //postnummer
    if (!/^[0-9]{4}$/.test(zipInputField.value)){ 
    zipInputField.style.backgroundColor = "red"
    bolian = false;    
    }
    else if (/^[0-9]{4}$/.test(zipInputField.value))
    zipInputField.style.backgroundColor = "#EDDCD2"

    //By
    if (!/^[-\sa-zA-Zæøå]+$/.test(cityInputField.value)){
        cityInputField.style.backgroundColor = "red"
        bolian = false;
    }
    else if (/^[-\sa-zA-Zæøå]+$/.test(cityInputField.value))
        cityInputField.style.backgroundColor = "#EDDCD2"
        //vej og hus nr

    if (!/^[-\sa-zA-Zæøå]+\s[0-9]+$/.test(addressInputField.value)){
     
        addressInputField.style.backgroundColor = "red"
        bolian = false;
    }
    else if (/^[-\sa-zA-Zæøå]+\s[0-9]$/.test(addressInputField.value))
        addressInputField.style.backgroundColor = "#EDDCD2"
        //Mobil nummer (element 5)
        /*
        //uden mellemrum
        /^[-\s0-9]{11}$/
        */

    //med mellemrum
    if (!/^[0-9]{8}$/.test(numberInputField.value)){
        numberInputField.style.backgroundColor = "red"
        bolian = false;
    }
        else if (/^[0-9]{8}$/.test(numberInputField.value))
        numberInputField.style.backgroundColor = "#EDDCD2"

    //email
    if (!/^[\w-æøå\.]+@([\w-æøå]+\.)+[\w-æøå]{2,4}$/.test(emailInputField.value)){
        emailInputField.style.backgroundColor = "red"
        bolian = false;
    }
    else if (/^[\w-æøå\.]+@([\w-æøå]+\.)+[\w-æøå]{2,4}$/.test(emailInputField.value)){
        emailInputField.style.backgroundColor = "#EDDCD2";
    }
        return bolian;
    }


const createCustomer = async () => {
    testRegX();
    let firstname = document.getElementById("name-input").value;
    let lastname = document.getElementById("lastname-input").value;
    let address = document.getElementById("address-input").value;
    let city = document.getElementById("city-input").value;
    let postalcode = document.getElementById("zip-code-input").value;
    let mobile = document.getElementById("number-input").value;
    let email = document.getElementById("email-input").value;
    //let plantcount = document.getElementById("numberOfPlants").value;
    
    if(testRegX()=== true){
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
        }),
    });
}
    console.log(firstname + " " + lastname);
}

const getCustomers = async () => {
    const Customers = await fetch("/api/customers");
    return await Customers.json();
};


//console.log("kig her " + getCustomers());


exports.getCustomers = async function(){
    return await model.information.find();
}


