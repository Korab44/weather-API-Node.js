const express =  require("express");
const app = express();
const https = require('https');

app.get('/', function(req, res) {

    var htttpWeather = 'https://api.openweathermap.org/data/2.5/weather?q=Prishtina&appid=c6f41b6b88d80af7ceda9140000b0c74&units=metric';
    https.get(htttpWeather, function(response) {
        console.log(response.statusCode)
        response.on('data', function(data) {
            const weatherData = JSON.parse(data);
            var temp = weatherData.main.temp;
            var tempMin = weatherData.main.temp_min;
            var tempMax = weatherData.main.temp_max;
            var feelsLike = weatherData.main.feels_like
            console.log(temp, tempMin, tempMax, feelsLike)
        })
    })
    res.send('Server is up and running')
})

app.listen(3000, function() {
    console.log("Server is running op port 3000")
})