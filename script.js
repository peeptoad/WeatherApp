let weather = {
    apiKey: "cba158f7f11a1109cebb66466292b1db",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city
        + "&units=imperial&appid=" 
        + this.apiKey
        )
      
        .then((response) => response.json())
       .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
     const { name } = data;
     const {icon, description} = data.weather[0];
     const {temp, humidity} = data.main;
     const {speed} = data.wind;
     console.log(name,icon,description,temp,humidity,speed)
     document.querySelector(".city").innerHTML = "Weather in " + name;
     document.querySelector(".description").innerHTML = description;
     document.querySelector(".temp").innerHTML = "Temp:" + temp  + "51&#176 F";
     document.querySelector(".humidity").innerHTML = "Humidity:" + humidity + "%" ;
     document.querySelector(".wind").innerHTML = "Windspeed:" + speed + " mph";

    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

document
.querySelector(".search button").addEventListener("click", function () {
weather.search();
})