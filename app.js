// const weather = new Weather("Palermo");
// const ui = new Ui();

// document.addEventListener("DOMContentLoaded", getWeatherData());

// async function getWeatherData(city) {
//   try {
//     let coordinates = await weather.getLatAndLon(city);
//     let data = await weather.getWeather(coordinates);
//     ui.insertData(data);
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

const inputValue = document.getElementById("city-input");
const cityBtn = document.getElementById("city-btn");

cityBtn.addEventListener("click", getWeatherData);

async function getWeatherData(e, city) {
  e.preventDefault();

  const weather = new Weather(inputValue.value);
  const ui = new Ui();
  if (inputValue !== "") {
    try {
      let coordinates = await weather.getLatAndLon(inputValue.value);
      let data = await weather.getWeather(coordinates);
      ui.insertData(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("Please select a city");
  }
}
