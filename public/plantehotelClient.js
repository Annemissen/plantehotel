let plants = []

const addPlant = async () => {
    let plantNameInputField = document.getElementById("plantName");
    let amountOfPlantsInputField = document.getElementById("numberOfPlants");

    let plantName = plantNameInputField.value;
    let amountOfPlants = amountOfPlantsInputField.value;
    let plantString = plantName + ', ' + amountOfPlants + ' stk.';
    plants.push(plantString);
    console.log(plants);

    if (plantName && amountOfPlants){
        let selector = document.getElementById("plants");
        let plant = {
            name: plantName,
            amount: amountOfPlants
        }
        plant = [plant];
        let option = await generatePlantListOption(plant);
        selector.innerHTML += option;
        
        if (!/^[-\sa-zA-Zæøå]+$/.test(plantName.value)){
        plantNameInputField.style.backgroundColor = "red";
        plantNameInputField.value = "";
        
        }else if (/^[-\sa-zA-Zæøå]+$/.test(plantName.value))
        plantNameInputField.style.backgroundColor = "#EDDCD2"
    
    
        if (!/^[0-9]{1}$/.test(numberOfPlants.value)){
        amountOfPlantsInputField.style.backgroundColor = "red"
        amountOfPlantsInputField.value = "";
        
        }else if (/^[0-9]{1}$/.test(numberOfPlants.value)){
        amountOfPlantsInputField.style.backgroundColor = "#EDDCD2"

        }

        amountOfPlantsInputField.value = "";
        plantNameInputField.value = "";

        plantNameInputField.style.backgroundColor = "#EDDCD2";
        amountOfPlantsInputField.style.backgroundColor = "#EDDCD2";

    }else if(plantName && !amountOfPlants){
        console.log("1")
    if (!/^[-\sa-zA-Zæøå]+$/.test(plantName.value)){
        plantNameInputField.style.backgroundColor = "red";
        plantNameInputField.value = "";
    
        }else if (/^[-\sa-zA-Zæøå]+$/.test(plantName.value)){
        plantNameInputField.style.backgroundColor = "#EDDCD2";
        
        amountOfPlantsInputField.style.backgroundColor = "red";

    }
       

    }else if(!plantName && amountOfPlants){
        console.log("2");
        if (!/^[0-9]{1}$/.test(numberOfPlants.value)){
            numberOfPlants.style.backgroundColor = "red";
            plantNameInputField.value = "";
            
            }else if (/^[0-9]{1}$/.test(numberOfPlants.value)){
                numberOfPlants.style.backgroundColor = "#EDDCD2"
    
            }

            plantNameInputField.style.backgroundColor = "red"  ;

    }else {
        console.log("3");
   
        plantNameInputField.style.backgroundColor = "red";
        amountOfPlantsInputField.style.backgroundColor = "red";
       
    }

    

   // plantNameInputField.value = "";
   // amountOfPlantsInputField.value = "";
}

async function generatePlantListOption(plant) {
    let template = await getText('/plantListOption.hbs');
    let compiledTemplate = Handlebars.compile(template);
    return compiledTemplate({ plant });
}

async function getText(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.text();
}

// function setDateRestrictions(){
//     let datePicker = document.getElementById("datepicker");
//     datePicker.min = "2020-10-31";
//     datePicker.max = "2020-11-28";
// }

function main(){
    let addPlantBtn = document.getElementById("addPlantBtn");
    addPlantBtn.addEventListener("click", addPlant);

    // setDateRestrictions();
}

main();