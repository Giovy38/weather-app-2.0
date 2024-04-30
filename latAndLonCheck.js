const checkbox = document.getElementById("lat-lon-check");
const checkValue = document.getElementById("check-value");

checkbox.addEventListener("click", onClick);

const latInput = document.getElementById("lat-input");
const lonInput = document.getElementById("lon-input");
const latLonBtn = document.getElementById("lat-lon-btn");

const cityInput = document.getElementById("city-input");
const cityBtn = document.getElementById("city-btn");

function onClick() {
  if (checkValue.checked) {
    latInput.style.display = "inline";
    lonInput.style.display = "inline";
    latLonBtn.style.display = "inline";

    cityInput.style.display = "none";
    cityBtn.style.display = "none";
  } else {
    latInput.style.display = "none";
    lonInput.style.display = "none";
    latLonBtn.style.display = "none";

    cityInput.style.display = "inline";
    cityBtn.style.display = "inline";
  }
}
