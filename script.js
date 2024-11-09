const apiKey = '31fceaec5602517f278607f283fa6949';  // Replace with your OpenWeather API key

document.getElementById('getWeatherBtn').addEventListener('click', async () => {
  const city = document.getElementById('cityInput').value;
  if (city) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const data = await response.json();

      if (response.ok) {
        document.getElementById('weatherResult').classList.remove('d-none');
        document.getElementById('cityName').textContent = `City: ${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
        document.getElementById('weatherDescription').textContent = `Weather: ${data.weather[0].description}`;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      alert('Error fetching weather data.');
    }
  } else {
    alert('Please enter a city name.');
  }
});

// Refresh button functionality
document.getElementById('refreshBtn').addEventListener('click', () => {
  document.getElementById('cityInput').value = '';  // Clear the input field
  document.getElementById('weatherResult').classList.add('d-none');  // Hide the weather result
});