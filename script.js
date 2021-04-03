// Pretty much on start up
window.addEventListener("load", () => {
    //const apiURL = "http://magicseaweed.com/api/289/forecast/?spot_id=10";
    const apiURL = "https://services.surfline.com/kbyg/spots/forecasts/{wave}?{params}";
    let minWaveSize;
    let maxWaveSize;

    fetch(apiURL, { 
        headers: {
            // remove all those random headers you added
            "api-key": 000
        },
        mode: 'cors' // add this 
    }).then(response => response.json())
    .then(function (myJson) {
        console.log(JSON.stringify(myJson));
    })
    .catch(error => console.error(error));
})
