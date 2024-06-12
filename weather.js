const cityData = {
  "Egypt": { "name": "Cairo", "temp": 30, "weather": "晴れ", "humidity": 50, "wind": 5 },
  "Russia": { "name": "Moscow", "temp": -5, "weather": "雪", "humidity": 80, "wind": 10 },
  "South Africa": { "name": "Johannesburg", "temp": 25, "weather": "曇り", "humidity": 60, "wind": 7 },
  "China": { "name": "Beijing", "temp": 20, "weather": "霧", "humidity": 70, "wind": 3 },
  "Japan": { "name": "Tokyo", "temp": 15, "weather": "晴れ", "humidity": 40, "wind": 2 },
  "Singapore": { "name": "Singapore", "temp": 28, "weather": "雨", "humidity": 90, "wind": 4 },
  "Australia": { "name": "Sydney", "temp": 22, "weather": "曇り", "humidity": 65, "wind": 6 },
  "United Kingdom": { "name": "London", "temp": 10, "weather": "雨", "humidity": 85, "wind": 8 },
  "France": { "name": "Paris", "temp": 18, "weather": "晴れ", "humidity": 55, "wind": 5 },
  "Brazil": { "name": "Rio de Janeiro", "temp": 35, "weather": "晴れ", "humidity": 45, "wind": 3 },
  "United States": { "name": "Washington D.C.", "temp": 12, "weather": "曇り", "humidity": 60, "wind": 7 }
};

document.querySelector('#search-button').addEventListener('click', function() {
  let country = document.querySelector('#country-select').value;
  let cityInfo = cityData[country];
  displayWeatherData(cityInfo);
});

function displayWeatherData(data) {
  let resultDiv = document.querySelector('#result');
  resultDiv.innerHTML = `
      <p><strong>都市:</strong> ${data.name}</p>
      <p><strong>温度:</strong> ${data.temp} °C</p>
      <p><strong>天気:</strong> ${data.weather}</p>
      <p><strong>湿度:</strong> ${data.humidity} %</p>
      <p><strong>風速:</strong> ${data.wind} m/s</p>
  `;
}