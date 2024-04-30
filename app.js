const weather = new Weather("Palermo");
const ui = new Ui();

document.addEventListener("DOMContentLoaded", getWeatherData());

async function getWeatherData(city) {
  try {
    let coordinates = await weather.getLatAndLon(city);
    let data = await weather.getWeather(coordinates);
    ui.insertData(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
