document.querySelector('#search-button').addEventListener('click', function() {
  let cityId = document.querySelector('#city-select').value;
  fetchWeatherData(cityId);
});

function fetchWeatherData(cityId) {
  // 実際のAPIリクエストを行う
  let url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=YOUR_API_KEY&lang=ja&units=metric`;

  fetch(url)
      .then(response => response.json())
      .then(data => displayWeatherData(data))
      .catch(error => console.error('Error:', error));
}

function displayWeatherData(data) {
  let resultDiv = document.querySelector('#result');
  resultDiv.innerHTML = `
      <p><strong>都市:</strong> ${data.name}</p>
      <p><strong>温度:</strong> ${data.main.temp} °C</p>
      <p><strong>天気:</strong> ${data.weather[0].description}</p>
      <p><strong>湿度:</strong> ${data.main.humidity} %</p>
      <p><strong>風速:</strong> ${data.wind.speed} m/s</p>
  `;
}
