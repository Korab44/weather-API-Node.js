const express =  require("express");
const app = express();
const https = require('https');

app.get('/', function(req, res) {

    var htttpWeather = 'https://api.openweathermap.org/data/2.5/weather?q=Prishtina&appid=c6f41b6b88d80af7ceda9140000b0c74&units=metric';
    https.get(htttpWeather, function(response) {
        console.log(response.statusCode)
        response.on('data', function(data) {
            const weatherData = JSON.parse(data);
            const icon = weatherData.weather[0].icon;
            const imgUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            var temp = weatherData.main.temp;
            var weatherDescription = weatherData.weather[0].description
            res.write("<h1>The temperature in Prishtina is " + temp + " degrees Celsius</h1>")
            res.write("<p>The weather is currently " + weatherDescription + "</p>")
            res.write("<img src=" + imgUrl + " >")
            res.send()
        })
    })
    
})

app.listen(3000, function() {
    console.log("Server is running op port 3000")
})