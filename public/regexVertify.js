const elements = document.querySelectorAll('input,button');
elements[12].onclick = () => {
    //fornavn
    if (!/^[a-zA-Zæøå]+$/.test(elements[0].value))
        elements[0].style.backgroundColor = "red"
    else if (/^[a-zA-Zæøå]+$/.test(elements[0].value))
        elements[0].style.backgroundColor = "#EDDCD2"

    //efternavn
    if (!/^[a-zA-Zæøå]+$/.test(elements[1].value))
        elements[1].style.backgroundColor = "red"
    else if (/^[a-zA-Z]+$/.test(elements[1].value))
        elements[1].style.backgroundColor = "#EDDCD2"

    //postnummer
    if (!/^[0-9]{4}$/.test(elements[2].value))
        elements[2].style.backgroundColor = "red"
    else if (/^[0-9]{4}$/.test(elements[2].value))
        elements[2].style.backgroundColor = "#EDDCD2"

    //By
    if (!/^[-\sa-zA-Zæøå]+$/.test(elements[3].value))
        elements[3].style.backgroundColor = "red"
    else if (/^[-\sa-zA-Zæøå]+$/.test(elements[3].value))
        elements[3].style.backgroundColor = "#EDDCD2"
        //vej og hus nr

    if (!/^[-\sa-zA-Zæøå]+\s[0-9]$/.test(elements[4].value))
        elements[4].style.backgroundColor = "red"
    else if (/^[-\sa-zA-Zæøå]+\s[0-9]$/.test(elements[4].value))
        elements[4].style.backgroundColor = "#EDDCD2"
        //Mobil nummer (element 5)
        /*
        //uden mellemrum
        /^[-\s0-9]{11}$/
        */

    //med mellemrum
    if (!/^[0-9]{8}$/.test(elements[5].value))
        elements[4].style.backgroundColor = "red"
    else if (/^[0-9]{8}$/.test(elements[5].value))
        elements[4].style.backgroundColor = "#EDDCD2"

    //email
    if (!/^[\w-æøå\.]+@([\w-æøå]+\.)+[\w-æøå]{2,4}$/.test(elements[6].value))
        elements[6].style.backgroundColor = "red"
    else if (/^[\w-æøå\.]+@([\w-æøå]+\.)+[\w-æøå]{2,4}$/.test(elements[6].value))
        elements[6].style.backgroundColor = "#EDDCD2"
}