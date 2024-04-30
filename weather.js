class Weather {
  constructor(city = "Palermo") {
    this.apiKey = "0e58386706fcbab11d3bb3dce6340151";
    this.city = city;
  }

  async getLatAndLon(city = "Palermo") {
    this.city = city;
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=1&appid=${this.apiKey}`
    );

    const data = await response.json();
    return { lat: data[0].lat, lon: data[0].lon };
  }

  async getWeather(coordinates = { lat: "", lon: "" }) {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${this.apiKey}`
    );

    const data = await res.json();
    return data;
  }

  changeCity(city) {
    this.city = city;
  }
}
