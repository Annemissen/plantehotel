const addPlant = async () => {
    let plantNameInputField = document.getElementById("plantName");
    let amountOfPlantsInputField = document.getElementById("numberOfPlants");

    let plantName = plantNameInputField.value;
    let amountOfPlants = amountOfPlantsInputField.value;


    if (plantName && amountOfPlants){
        let selector = document.getElementById("planter");
        let plant = {
            name: plantName,
            amount: amountOfPlants
        }
        plant = [plant];
        let option = await generatePlantListOption(plant);
        selector.innerHTML += option;
    }

    plantNameInputField.value = "";
    amountOfPlantsInputField.value = "";
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

function main(){
    let addPlantBtn = document.getElementById("addPlantBtn");
    addPlantBtn.addEventListener("click", addPlant);
}

main();