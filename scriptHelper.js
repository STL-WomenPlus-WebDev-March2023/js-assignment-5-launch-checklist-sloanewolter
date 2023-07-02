// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"
    } else if (isNaN(testInput) === true) {
        return "Not a Number"
    } else if (isNaN(testInput) === false) {
        return "Is a Number"
    }  
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
   let pilotInput = document.getElementById("pilotName");
   let copilotInput = document.querySelector("input[name=copilotName]");
   let fuelLevelInput =document.querySelector("input[name=fuelLevel]");
   let cargoLevelInput= document.querySelector("inupt[name=cargoMass]");
   if (validateInput(pilotInput.value) === "Empty" || validateInput(copilotInput.value) === "Empty" || validateInput(fuelLevelInput.value) === "Empty" 
   || validateInput(cargoLevelInput.value) === "Empty" ) {
        alert("All fields are required");
   };
   if (validateInput(pilotInput.value) === "Is a Number") {
        alert ("Invalid Input for Pilot Name");
   };
   if (validateInput(copilotInput.value) === "Is a Number") {
        alert ("Invalid input for Copilot Name");
   };
   if (validateInput(fuelLevelInput.value) === "Not a Number") {
        alert ("Invalid Input for Fuel Level");
   }
   if(validateInput(cargoLevelInput.value)==="Not a Number") {
       alert ("Invalid input for Cargo Mass");
   }
})
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
