document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.querySelector(".search-btn");
    const searchBar = document.querySelector(".search-bar");
  
    searchBtn.addEventListener("click", function () {
      search();
    });
  
    searchBar.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        search();
      }
    });

    weather.appWeather("Lisbon");  
  });
  