// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo( document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    const div = document.getElementById("missionTarget");
      div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star} </li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src=${imageUrl}>
                `
   
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
    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    let copilotStatus = document.getElementById("copilotStatus");
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    let h2 = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus")


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
         };
        if(validateInput(cargoLevel)==="Not a Number") {
            alert ("Invalid input for Cargo Mass"); 
        }
         if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" 
         || validateInput(cargoLevel) === "Empty" || validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number"  
         || validateInput(cargoLevel)==="Not a Number") {
            list.style.visibility = "hidden"
         } else {
    
        
    
   if(fuelLevel < 10000 && cargoLevel < 10000) {
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        h2.style.color = 'rgb(199, 37, 78)';
      
   };

   if(fuelLevel < 10000 && cargoLevel > 10000) {
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        h2.style.color = 'rgb(199, 37, 78)';
   };

   if (cargoLevel > 10000 && fuelLevel >= 10000) {
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        h2.style.color = 'rgb(199, 37, 78)';
        
   };

   if (cargoLevel < 10000 && fuelLevel >= 10000) {
       list.style.visibility = "visible";
       h2.innerHTML = "Shuttle is Ready for Launch";
       h2.style.color = 'rgb(65, 159, 106)';
       fuelStatus.innerHTML = "Fuel level high enough for launch";
       cargoStatus.innerHTML = "Cargo mass low enough for launch";
   };

};


};

async function myFetch() {
    let planetsReturned;
    let listedPlanets;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return  response.json()
       })
        return  planetsReturned

        }


    
    


function pickPlanet(array) {
  let i =  Math.floor(Math.random()*array.length);
  return array[i];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
