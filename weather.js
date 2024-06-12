const cityData = {
  "360630": { "name": "Cairo", "temp": 30, "weather": "晴れ", "humidity": 50, "wind": 5 },
  "524901": { "name": "Moscow", "temp": -5, "weather": "雪", "humidity": 80, "wind": 10 },
  "993800": { "name": "Johannesburg", "temp": 25, "weather": "曇り", "humidity": 60, "wind": 7 },
  "1816670": { "name": "Beijing", "temp": 20, "weather": "霧", "humidity": 70, "wind": 3 },
  "1850147": { "name": "Tokyo", "temp": 15, "weather": "晴れ", "humidity": 40, "wind": 2 },
  "1880252": { "name": "Singapore", "temp": 28, "weather": "雨", "humidity": 90, "wind": 4 },
  "2147714": { "name": "Sydney", "temp": 22, "weather": "曇り", "humidity": 65, "wind": 6 },
  "2643743": { "name": "London", "temp": 10, "weather": "雨", "humidity": 85, "wind": 8 },
  "2968815": { "name": "Paris", "temp": 18, "weather": "晴れ", "humidity": 55, "wind": 5 },
  "3451190": { "name": "Rio de Janeiro", "temp": 35, "weather": "晴れ", "humidity": 45, "wind": 3 },
  "5128581": { "name": "New York", "temp": 12, "weather": "曇り", "humidity": 60, "wind": 7 },
  "5368361": { "name": "Los Angeles", "temp": 25, "weather": "晴れ", "humidity": 30, "wind": 5 }
};

document.querySelector('#search-button').addEventListener('click', function() {
  let cityId = document.querySelector('#city-select').value;
  let cityInfo = cityData[cityId];
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
