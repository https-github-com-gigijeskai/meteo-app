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
