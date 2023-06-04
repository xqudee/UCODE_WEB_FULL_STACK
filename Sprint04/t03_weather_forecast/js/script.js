var forecastContainer = document.getElementById('forecast-container');
var apiKey = 'd8aef3c953a240bd836183133232605';
var currentDate = new Date();
var daysToShow = 7;
var lang = 'uk';

function getForecast() {
    var apiUrl = 'https://api.weatherapi.com/v1/forecast.json?key=' + apiKey 
                + '&q=Kharkiv&days=' + daysToShow 
                + '&lang=' + lang;

    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        var forecast = data.forecast.forecastday;

        var countryDiv = document.getElementById('country-div');
        let city = document.createElement('h1');
        city.textContent = data.location.name;
        countryDiv.appendChild(city);

        forecast.forEach(element => {
            let date = new Date(element.date);
            let icon = element.day.condition.icon;
            let temperature = element.day.maxtemp_c;

            let dayElement = document.createElement('div');
            dayElement.classList.add('day');

            let dateElement = document.createElement('h3');
            dateElement.textContent = formateDate(date);
            dateElement.style.borderBottom = '1px solid rgb(107, 107, 145)';

            let iconElement = document.createElement('img');
            iconElement.classList.add('weather-icon');
            iconElement.src = 'https:'+ icon;
            iconElement.style.width = '100px'

            let temperatureElement = document.createElement('p');
            let str = "";
            if (temperature > 0) str += '+';
            temperatureElement.textContent = str + temperature + '°';

            dayElement.appendChild(dateElement);
            dayElement.appendChild(iconElement);
            dayElement.appendChild(temperatureElement);

            forecastContainer.appendChild(dayElement);
        });
        
    })
}

function formateDate(date) {
    let day = ('0' + date.getDate()).slice(-2);
    let month = ('0' + (date.getMonth() + 1)).slice(-2);
    return day + '.' + month;
}

getForecast();