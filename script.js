// This function displays the data onto the website
function displayData(data) {
    let surfLocation = document.getElementById("location");
    let minWaveSize = document.getElementById("surf-location-min-wave-size");
    let maxWaveSize = document.getElementById("surf-location-max-wave-size");

    console.log(data);
    surfLocation.innerHTML = data.associated.tideLocation.name;
    minWaveSize.innerHTML = data.associated.tideLocation.max + data.associated.units.tideHeight;
    maxWaveSize.innerHTML = data.associated.tideLocation.min + data.associated.units.tideHeight;
}

// Pretty much on start up, we fetch the data using the Surfline API
window.addEventListener("load", () => {
    //const apiURL = "http://magicseaweed.com/api/289/forecast/?spot_id=10";
    const apiURL = "https://services.surfline.com/kbyg/spots/forecasts/tides?spotId=5842041f4e65fad6a770882e&days=6";

    fetch(apiURL)
    .then(response => {return response.json()})
    .then(data => displayData(data));
})
