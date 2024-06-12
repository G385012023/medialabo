let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

// 課題3-2 ここからプログラムを書こう

// データをHTMLに表示する関数を定義
function displayWeatherData(data) {
  let resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <h2>天気情報</h2>
    <p><strong>都市:</strong> ${data.name}</p>
    <p><strong>温度:</strong> ${data.main.temp} °C</p>
    <p><strong>天気:</strong> ${data.weather[0].description}</p>
    <p><strong>湿度:</strong> ${data.main.humidity} %</p>
    <p><strong>風速:</strong> ${data.wind.speed} m/s</p>
  `;
}

displayWeatherData(data);
