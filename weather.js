const cityData = {
  "Cairo": 360630,
  "Moscow": 524901,
  "Johannesburg": 993800,
  "Beijing": 1816670,
  "Tokyo": 1850147,
  "Singapore": 1880252,
  "Sydney": 2147714,
  "London": 2643743,
  "Paris": 2968815,
  "Rio de Janeiro": 3451190,
  "New York": 5128581,
  "Los Angeles": 5368361
};

document.querySelector('#search-button').addEventListener('click', function() {
  let cityName = document.querySelector('#city-search').value;
  let cityId = cityData[cityName];
  
  if (cityId) {
      fetchWeatherData(cityId);
  } else {
      alert("入力された都市は見つかりません。");
  }
});

function fetchWeatherData(cityId) {
  // 本来はここでAPIリクエストを行うが、ここではローカルのデータを使用
  let data = {
      "coord": { "lon": 139.6917, "lat": 35.6895 },
      "weather": [
          { "id": 800, "main": "Clear", "description": "晴れ", "icon": "01d" }
      ],
      "base": "stations",
      "main": {
          "temp": 15.0,
          "feels_like": 14.5,
          "temp_min": 15.0,
          "temp_max": 15.0,
          "pressure": 1016,
          "humidity": 72,
          "sea_level": 1016,
          "grnd_level": 1012
      },
      "visibility": 10000,
      "wind": { "speed": 3.6, "deg": 180 },
      "clouds": { "all": 0 },
      "dt": 1625214000,
      "sys": {
          "type": 1,
          "id": 8074,
          "country": "JP",
          "sunrise": 1625184000,
          "sunset": 1625234400
      },
      "timezone": 32400,
      "id": 1850147,
      "name": "Tokyo",
      "cod": 200
  };

  displayWeatherData(data);
}

function displayWeatherData(data) {
  let resultDiv = document.querySelector('#result');
  resultDiv.innerHTML = `
      <p><strong>都市:</strong> ${data.name}</p>
      <p><strong>温度:</strong> ${data.main.temp} °C</p>
      <p><strong>天気:</strong> ${data.weather[0].description}</p>
      <p><strong>湿度:</strong> ${data.main.humidity} %</p>
      <p><strong>風速:</strong> ${data.wind.speed} m/s</p>`;
}