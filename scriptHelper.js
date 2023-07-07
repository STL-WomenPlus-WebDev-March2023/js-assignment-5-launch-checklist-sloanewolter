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
};


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let form = document.getElementById("testForm");
   form.addEventListener("submit", function (event) {
   pilot = document.getElementById("pilotName").value;
   console.log(pilot)
   copilot = document.querySelector("input[name=copilotName]").value;
   console.log(copilot)
   fuelLevel =document.querySelector("input[name=fuelLevel]").value;
   console.log(fuelLevel)
   cargoLevel= document.querySelector("input[name=cargoMass]").value;
   console.log(cargoLevel) 
   
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" 
   || validateInput(cargoLevel) === "Empty" ) {
        alert("All fields are required");
   };
   if (validateInput(pilot) === "Is a Number") {
        alert ("Invalid Input for Pilot Name");
   };
   if (validateInput(copilot) === "Is a Number") {
        alert ("Invalid input for Copilot Name");
   };
   if (validateInput(fuelLevel) === "Not a Number") {
        alert ("Invalid Input for Fuel Level");
   }
   if(validateInput(cargoLevel)==="Not a Number") {
       alert ("Invalid input for Cargo Mass");
   }
   let pilotStatus = document.getElementById("pilotStatus");
   pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
   let copilotStatus = document.getElementById("copilotStatus");
   copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
   let h2 = document.getElementById("launchStatus")

   if(fuelLevel < 10000) {
        list.style.visibility = "visible";
        let fuelStatus = document.getElementById("fuelStatus");
        fuelStatus.innerHTML = "Fuel level too low for launch";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        list.style.backgroundColor = "rgb(199, 37, 78)";
   }

   if (cargoLevel > 10000) {
        list.style.visibility = "visible";
        let cargoStatus = document.getElementById("cargoStatus");
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        list.style.backgroundColor = "rgb(199, 37, 78)";
   }

   if (cargoLevel < 10000 && fuelLevel > 10000) {
       list.style.visibility = "visible";
       h2.innerHTML = "Shuttle Ready for Launch";
       list.style.backgroundColor = "green"
   }

   event.preventDefault();


})
   }
   function(window.document, list, "Chris", "Bob", 10000, 1)

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
