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
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, temp_min, temp_max, humidity } = data.main;
    const { speed } = data.wind;
    const { country, sunrise, sunset } = data.sys;
    console.log(name, icon, description, temp, temp_min, temp_max, humidity, speed, country, sunrise, sunset);
    document.querySelector(".city").innerText = "Meteo di" + " " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".weather-conditions").innerHTML = description;
    document.querySelector(".temp").innerHTML = Math.round(temp) + "&#176 C";
  },
};
