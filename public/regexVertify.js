const elements = document.querySelectorAll('input,button');
const firstname  = document.getElementById("name-input");
const lastaname  = document.getElementById("lastname-input");
const zip  = document.getElementById("zip-code-input");
const city = document.getElementById("city-input");
const address  = document.getElementById("address-input");
const number  = document.getElementById("number-input");
const email = document.getElementById("email-input");
const plantName  = document.getElementById("plantName");
const numberOfPlants  = document.getElementById("numberOfPlants");


const addPlantBtn  = document.getElementById("addPlantBtn");
const sendtbotton  = document.getElementById("send-button");

function test (){
        //fornavn
    
        if (!/^[a-zA-Zæøå]+$/.test(firstname.value))
        firstname.style.backgroundColor = "red"
        else if (/^[a-zA-Zæøå]+$/.test(firstname.value))
        firstname.style.backgroundColor = "#EDDCD2"

        //efternavn
        if (!/^[a-zA-Zæøå]+$/.test(lastaname.value))
        lastaname.style.backgroundColor = "red"
        else if (/^[a-zA-Z]+$/.test(lastaname.value))
        lastaname.style.backgroundColor = "#EDDCD2"

        //postnummer
        if (!/^[0-9]{4}$/.test(zip.value))
        zip.style.backgroundColor = "red"
        else if (/^[0-9]{4}$/.test(zip.value))
        zip.style.backgroundColor = "#EDDCD2"

        //By
        if (!/^[-\sa-zA-Zæøå]+$/.test(city.value))
            city.style.backgroundColor = "red"
        else if (/^[-\sa-zA-Zæøå]+$/.test(city.value))
            city.style.backgroundColor = "#EDDCD2"
            //vej og hus nr

        if (!/^[-\sa-zA-Zæøå]+\s[0-9] $/.test(address.value))
            address.style.backgroundColor = "red"
        else if (/^[-\sa-zA-Zæøå]+\s[0-9]$/.test(address.value))
            address.style.backgroundColor = "#EDDCD2"
            //Mobil nummer (element 5)
            /*
            //uden mellemrum
            /^[-\s0-9]{11}$/
            */

        //med mellemrum
        if (!/^[0-9]{8}$/.test(number.value))
            number.style.backgroundColor = "red"
        else if (/^[0-9]{8}$/.test(number.value))
            number.style.backgroundColor = "#EDDCD2"

        //email
        if (!/^[\w-æøå\.]+@([\w-æøå]+\.)+[\w-æøå]{2,4}$/.test(email.value))
            email.style.backgroundColor = "red"
        else if (/^[\w-æøå\.]+@([\w-æøå]+\.)+[\w-æøå]{2,4}$/.test(email.value))
            email.style.backgroundColor = "#EDDCD2"
    }

//addPlantBtn.onclick = ()  =>{
//     if (!/^[-\sa-zA-Zæøå]+$/.test(plantName.value))
//     plantName.style.backgroundColor = "red"
//     else if (/^[-\sa-zA-Zæøå]+$/.test(plantName.value))
//     plantName.style.backgroundColor = "#EDDCD2"


//     if (!/^[0-9]{1}$/.test(numberOfPlants.value))
//     numberOfPlants.style.backgroundColor = "red"
//     else if (/^[0-9]{1}$/.test(numberOfPlants.value))
//     numberOfPlants.style.backgroundColor = "#EDDCD2"

// }
0
    //plante navn?

//Antal?

//Eriks lektion 9.5 (skal slettes)
/*
const elements = document.querySelectorAll('input,button');
elements[13].onclick = () => {
    if (elements[0].value !== elements[1].value)
        elements[3].innerHTML = 'Passwords er ikke ens!';
    else if (/^.{8,}$/.test(elements[0].value))
        elements[3].innerHTML = 'Password er ok!';
    else
        elements[3].innerHTML = 'Passwords er på mindre end 8 tegn!';
}
*/