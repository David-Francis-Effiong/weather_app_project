var weatherData = [

    { 
        city: "New York",
        temperature: 22,
        condition: "Sunny",

    },

    {
        city: "Los Angeles",
        temperature: 28,
        condition: "Sunny",

    },
    {
        city: "Chicago",
        temperature: 18,
        condition: "Cloudy"

    },

    {        city: "Houston",
        temperature: 30,
        condition: "Rainy", 
    },

    {        city: "Phoenix",
        temperature: 35,
        condition: "Sunny"

    },
];

// select Elements

var select = document.getElementById("select_city");
var info = document.getElementById("weather-info");


for (var i = 0; i < weatherData.length; i++) {
    var option = document.createElement ("option"); // Create a new option HTML element
    option.text = weatherData[i].city; // Set the text of the option to the city name   
    select.appendChild(option); // Append the option to the select parent element. The appendChild method adds a node to the end of the list of children of a specified parent node.
}


// Add an event listener to the select element

select.addEventListener("change", function() {
    //console.log(this.value) // this refers to a container that contains the select element
    var selectedCity = this.value; // Get the selected city from the dropdown




    for (var i = 0; i < weatherData.length; i++) {
        if (weatherData [i].city === selectedCity) {
            // If the selected city matches the city in the weatherData array, display its information
            info.innerHTML = 
            '<h2>' + weatherData[i].city + '</h2>' +
            '<p>Temperature: ' + weatherData[i].temperature + '°C</p>' +
            '<p>Condition: ' + weatherData[i].condition + '</p>';
            return; // Exit the loop once the matching city is found
        }
    }
})

function getWeather () {
    var response = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";



}









