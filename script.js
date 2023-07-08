// Write your JavaScript code here!




window.addEventListener("load", function() {
    let form = document.getElementById("testForm");
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden"
    form.addEventListener("submit", function (event) {
    let pilot = document.getElementById("pilotName").value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    let fuelLevel =document.querySelector("input[name=fuelLevel]").value;
    let cargoLevel= document.querySelector("input[name=cargoMass]").value;
    //let list = document.getElementById("faultyItems");
    //list.style.visibility = "hidden"
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    event.preventDefault();
    })

   let listedPlanets;
   let listedPlanetsResponse = myFetch()
   console.log(listedPlanetsResponse)
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       let selectedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image)
        console.log(selectedPlanet.name)

   })

})
   

