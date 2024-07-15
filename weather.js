const weather = {
  apiKey: "82e9f38bca180632df4f698777ef672a",

  appWeather: async function (city) {
      try {
          const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
          );

          if (!response.ok) {
              alert("No place found.Please try again.");
              throw new Error("No place found.Please try again.");
          }

          const data = await response.json();
          showWeather(data);
      } catch (error) {
          console.error("Request failed", error);
      }
  }
};

function showWeather(data) {
  const city = data.name;
  const temperature = data.main.temp;
  const icon = data.weather[0].icon;
  const description = data.weather[0].description;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;

  document.querySelector(".city").innerText = city;
  document.querySelector(".temp").innerText = temperature + "°C";
  document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
  document.querySelector(".description").innerText = description;
  document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText = "Wind speed: " + windSpeed + " km/h";
  document.querySelector(".weather").classList.remove("loading");
}

  
function search() {
  const city = document.querySelector(".search-bar").value;
  if (city) {
      weather.appWeather(city);
  } else {
      alert("Please enter a city name.");
  }
}

document.querySelector("search button").addEventListener("click", function () {
      search();
});

document.querySelector("search-bar").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
      search();
  }
});

  weather.appWeather("Lisbon");  

  

//const apiKey = "82e9f38bca180632df4f698777ef672a"
//const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=82e9f38bca180632df4f698777ef672a"
