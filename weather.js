document.querySelector('#search-button').addEventListener('click', function() {
  let cityId = document.querySelector('#city-select').value;
  fetchWeatherData(cityId);
});

function fetchWeatherData(cityId) {
  // 実際のAPIリクエストを行う
  let url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=YOUR_API_KEY&lang=ja&units=metric`;

  fetch(url)
      .then(response)}
