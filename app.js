const inputValue = document.getElementById("city-input");
const img = document.getElementById("weather-img");

cityBtn.addEventListener("click", getWeatherData);

async function getWeatherData(e) {
  e.preventDefault();

  const weather = new Weather(inputValue.value);
  const ui = new Ui();
  if (inputValue.value !== "") {
    try {
      let coordinates = await weather.getLatAndLon(inputValue.value);
      let data = await weather.getWeather(coordinates);
      ui.insertData(data);
      console.log(data);

      city.classList.remove("city-error");

      switch (data.weather[0].description) {
        case "broken clouds":
          img.src = "/image/clouds.jpg";
          break;
        case "overcast clouds":
          img.src = "/image/clouds.jpg";
          break;
        case "clear sky":
          img.src = "/image/sun.jpg";
          break;
        case "moderate rain":
          img.src = "/image/rain gif.gif";
          break;
        case "light rain":
          img.src = "/image/rain.jpg";
          break;
      }
    } catch (error) {
      city.textContent =
        "Errore nella ricerca della città, assicurati di aver inserito una città esistente";
      city.className = "city-error";
    }
  } else {
    city.textContent = "devi inserire una città";
    city.className = "city-error";
  }
}

// lat and lon search

latLonBtn.addEventListener("click", getWeatherLonLat);

async function getWeatherLonLat(e) {
  e.preventDefault();
  const weather = new Weather();
  const ui = new Ui();
  if (latInput.value !== "" && lonInput.value !== "") {
    try {
      let coordinates = { lat: latInput.value, lon: lonInput.value };
      let data = await weather.getWeather(coordinates);
      ui.insertData(data);
      console.log(data);

      city.classList.remove("city-error");

      switch (data.weather[0].description) {
        case "broken clouds":
          img.src = "/image/clouds.jpg";
          break;
        case "overcast clouds":
          img.src = "/image/clouds.jpg";
          break;
        case "clear sky":
          img.src = "/image/sun.jpg";
          break;
        case "moderate rain":
          img.src = "/image/rain gif.gif";
          break;
        case "light rain":
          img.src = "/image/rain.jpg";
          break;
      }
    } catch (error) {
      city.textContent =
        "Errore nella ricerca della città, assicurati di aver inserito le coordinate corrette";
      city.className = "city-error";
    }
  } else {
    city.textContent = "devi inserire delle coordinate";
    city.className = "city-error";
  }
}
