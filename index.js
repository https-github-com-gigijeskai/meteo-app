function hamburgerMenu() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function detailToggle() {
  let x = document.querySelector("#details-weather-conditions");
  let y = document.querySelector("#forecast");
  if ((x.style.display === "none") | ((x.style.display === "none") & (y.requestPointerLock.display === "flex"))) {
    x.style.display = "flex";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "flex";
  }
}
function forecastToggle() {
  let x = document.querySelector("#forecast");
  let y = document.querySelector("#details-weather-conditions");
  if ((x.style.display === "none") | ((x.style.display === "none") & (y.requestPointerLock.display === "flex"))) {
    x.style.display = "flex";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "flex";
  }
}

let weather = {
  apiKey: "b3986ed7dbefd400d6ae3068ccccdc5d",
  fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey + "&lang=it")
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { lon, lat } = data.coord;
    const { name, visibility } = data;
    const { icon, description } = data.weather[0];
    const { temp, temp_min, temp_max, humidity, pressure } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = name;
    document.querySelector("#icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".weather-conditions").innerHTML = description;
    document.querySelector(".temp").innerHTML = Math.round(temp) + "&#176 C";
    document.querySelector(".temp-min-max").innerHTML = Math.round(temp_min) + "&#176 C" + " / " + Math.round(temp_max) + "&#176 C";
    document.querySelector(".wind").innerHTML = Math.round(speed) + " Km/h";
    document.querySelector(".humidity").innerHTML = humidity + " %";
    document.querySelector(".pressure").innerHTML = pressure + " mb";
    document.querySelector(".visibility").innerHTML = visibility + " m";
    document.querySelector(".lon-lat").innerHTML = lon + "/" + lat;
  },
};

let forecastWeater = {
  apiKey: "b3986ed7dbefd400d6ae3068ccccdc5d",
  fetchForecastWeater: function (city) {
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=" + this.apiKey + "&lang=it")
      .then((response) => response.json())
      .then((data) => this.displayForecastWeater(data));
  },
  displayForecastWeater: function (data) {
    let { dt_txt } = data.list[0];
    console.log(data.list);
    document.querySelector(".days:nth-child(1)").innerHTML = dt_txt;
  },
};
