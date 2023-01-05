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

let forecastWeater = {
  apiKey: "b3986ed7dbefd400d6ae3068ccccdc5d",
  fetchForecastWeater: function (city) {
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=" + this.apiKey + "&lang=it")
      .then((response) => response.json())
      .then((data) => this.displayForecastWeater(data));
  },
  displayForecastWeater: function (data) {
    document.querySelector(".city").innerText = data.city.name;
    document.querySelector("#icon").src = "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png";
    document.querySelector(".weather-conditions").innerHTML = data.list[0].weather[0].description;
    document.querySelector(".temp").innerHTML = Math.round(data.list[0].main.temp) + "&#176 C";
    document.querySelector(".temp-min-max").innerHTML = Math.round(data.list[0].main.temp_max) + "&#176 C" + " / " + Math.round(data.list[2].main.temp_min) + "&#176 C";
    document.querySelector(".wind").innerHTML = Math.round(data.list[0].wind.speed) + " Km/h";
    document.querySelector(".humidity").innerHTML = data.list[0].main.humidity + " %";
    document.querySelector(".pressure").innerHTML = data.list[0].main.pressure + " mb";
    document.querySelector(".visibility").innerHTML = data.list[0].visibility + " m";
    document.querySelector(".lon-lat").innerHTML = data.city.coord.lon + "/" + data.city.coord.lat;
    document.querySelector(".days:nth-child(1)").innerHTML = `<p>Oggi</p>
    <img src=http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png />
    <p>${data.list[0].weather[0].description}</p>
    <p>${Math.round(data.list[0].main.temp_max)}&#176 C/${Math.round(data.list[2].main.temp_min)}&#176 C</p>`;

    const daysOfTheWeek = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
    let date = new Date();
    const dayOfTheWeek = date.getDay();
    const resultDay2 = daysOfTheWeek[dayOfTheWeek + 1];
    document.querySelector(".days:nth-child(2)").innerHTML = `<p>${resultDay2}</p>
    <img src=http://openweathermap.org/img/wn/${data.list[7].weather[0].icon}.png />
    <p>${data.list[7].weather[0].description}</p>
    <p>${Math.round(data.list[7].main.temp_max)}&#176 C/${Math.round(data.list[5].main.temp_min)}&#176 C</p>`;
    const resultDay3 = daysOfTheWeek[dayOfTheWeek + 2];
    document.querySelector(".days:nth-child(3)").innerHTML = `<p>${resultDay3}</p>
    <img src=http://openweathermap.org/img/wn/${data.list[15].weather[0].icon}.png />
    <p>${data.list[15].weather[0].description}</p>
    <p>${Math.round(data.list[15].main.temp_max)}&#176 C/${Math.round(data.list[13].main.temp_min)}&#176 C</p>`;
    const resultDay4 = daysOfTheWeek[dayOfTheWeek + 3];
    document.querySelector(".days:nth-child(4)").innerHTML = `<p>${resultDay4}</p>
    <img src=http://openweathermap.org/img/wn/${data.list[23].weather[0].icon}.png />
    <p>${data.list[23].weather[0].description}</p>
    <p>${Math.round(data.list[23].main.temp_max)}&#176 C/${Math.round(data.list[21].main.temp_min)}&#176 C</p>`;
    const resultDay5 = daysOfTheWeek[dayOfTheWeek + 4];
    document.querySelector(".days:nth-child(5)").innerHTML = `<p>${resultDay5}</p>
    <img src=http://openweathermap.org/img/wn/${data.list[31].weather[0].icon}.png />
    <p>${data.list[31].weather[0].description}</p>
    <p>${Math.round(data.list[31].main.temp_max)}&#176 C/${Math.round(data.list[29].main.temp_min)}&#176 C</p>`;
    const resultDay6 = daysOfTheWeek[dayOfTheWeek + 5];
    document.querySelector(".days:nth-child(6)").innerHTML = `<p>${resultDay6}</p>
    <img src=http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}.png />
    <p>${data.list[39].weather[0].description}</p>
    <p>${Math.round(data.list[39].main.temp_max)}&#176 C/${Math.round(data.list[37].main.temp_min)}&#176 C</p>`;
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?sky+" + data.list[0].weather[0].main + "')";
  },
  search: function () {
    this.fetchForecastWeater(document.querySelector(".search-bar").value);
  },
};
document.querySelector("#search button").addEventListener("click", function () {
  forecastWeater.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    forecastWeater.search();
  }
});
forecastWeater.fetchForecastWeater("Roma");
