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

      city.style.fontSize = "40px";
      city.style.background = "none";
      city.style.boxShadow = "none";
      city.style.borderRadius = "0";
      city.style.textAlign = "center";
      city.style.color = "white";
      city.style.padding = "0";
      city.style.marginBottom = "10px";

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
      }
    } catch (error) {
      city.textContent =
        "Errore nella ricerca della città, assicurati di aver inserito una città esistente";

      city.style.fontSize = "30px";
      city.style.background = "white";
      city.style.boxShadow = "5px 5px 10px 2px #101010";
      city.style.borderRadius = "10px";
      city.style.textAlign = "center";
      city.style.color = "red";
      city.style.padding = "5px";
      city.style.marginBottom = "20px";
    }
  } else {
    city.textContent = "devi inserire una città";
    city.style.fontSize = "30px";
    city.style.background = "white";
    city.style.boxShadow = "5px 5px 10px 2px #101010";
    city.style.borderRadius = "10px";
    city.style.textAlign = "center";
    city.style.color = "red";
    city.style.padding = "5px";
    city.style.marginBottom = "20px";
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

      city.style.fontSize = "40px";
      city.style.background = "none";
      city.style.boxShadow = "none";
      city.style.borderRadius = "0";
      city.style.textAlign = "center";
      city.style.color = "white";
      city.style.padding = "0";
      city.style.marginBottom = "10px";

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
      }
    } catch (error) {
      city.textContent =
        "Errore nella ricerca della città, assicurati di aver inserito le coordinate corrette";
      city.style.fontSize = "30px";
      city.style.background = "white";
      city.style.boxShadow = "5px 5px 10px 2px #101010";
      city.style.borderRadius = "10px";
      city.style.textAlign = "center";
      city.style.color = "red";
      city.style.padding = "5px";
      city.style.marginBottom = "20px";
    }
  } else {
    city.textContent = "devi inserire delle coordinate";
    city.style.fontSize = "30px";
    city.style.background = "white";
    city.style.boxShadow = "5px 5px 10px 2px #101010";
    city.style.borderRadius = "10px";
    city.style.textAlign = "center";
    city.style.color = "red";
    city.style.padding = "5px";
    city.style.marginBottom = "20px";
  }
}
