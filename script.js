// Write your JavaScript code here!




window.addEventListener("load", function() {
    let form = document.getElementById("testForm");
    form.addEventListener("submit", function (event) {
    let pilot = document.getElementById("pilotName").value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    let fuelLevel =document.querySelector("input[name=fuelLevel]").value;
    let cargoLevel= document.querySelector("input[name=cargoMass]").value;
    let list = document.getElementById("faultyItems");
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    event.preventDefault();
    })

   let listedPlanets;
   let listedPlanetsResponse = myFetch()
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(planet, document)

   })


   
})
