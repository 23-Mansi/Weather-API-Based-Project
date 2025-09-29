async function getWeather() {
  const location = document.getElementById("locationInput").value;
  const apiKey = "8728554da5224bed847162044252009"; // Your API Key
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();

    document.getElementById("result").innerHTML = `
      <p><strong>Location:</strong> ${data.location.name}, ${data.location.country}</p>
      <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
      <p><strong>Condition:</strong> ${data.current.condition.text}</p>
      <img src="${data.current.condition.icon}" alt="weather-icon" />
    `;
  } catch (error) {
    document.getElementById("result").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
