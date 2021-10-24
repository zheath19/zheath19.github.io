// Grabbing Elements from the DOM to change later
let report = document.getElementById("weather-report");
let wowimg = document.getElementById("weather-display");
let zoneName = document.getElementById("wow-location");

// On load take user location and display weather for it
window.addEventListener('load', () => {
  let long;
  let lat;
  const api = "d94484b99eae90a41ba0f3597d4dcf30";
  // Accesing Geolocation of User
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // Storing Longitude and Latitude in variables
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

      // Using fetch to get data
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temp } = data.main;
          const place = data.name;

          // Convert int temp to fahrenheit
          let fahrenheit = (temp * 9) / 5 + 32;
          fahrenheit = Math.round(fahrenheit);

          // Change Page elements to match weather
          report.innerText = `It is ${fahrenheit}°F in ${place}`;
          setBackground(fahrenheit);
        });
    });
  }
});


// When Enter Key or submit button is pressed save value search for that cities weather
const form = document.querySelector("#search-form"); 
form.addEventListener("submit", e => {
  e.preventDefault();
  let msg = document.getElementById("msg");
  let input = document.getElementById("search-bar")
  const inputVal = input.value;
  const apiKey = "6b5ff5bca80a49c545a670a5deb87926";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

   // Using fetch to get data
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temp } = data.main;
          const place = data.name;

          // Convertint temp to fahrenheit
          let fahrenheit = (temp * 9) / 5 + 32;
          fahrenheit = Math.round(fahrenheit);

          // Change Page elements to match weather
          report.innerText = `It is ${fahrenheit}°F in ${place}`;
          setBackground(fahrenheit);

          msg.textContent = "";
          form.reset();
        })
        .catch (err => {
          msg.innerHTML = 'Enter a Valid City Name';
        });
});

// Takes in current temp and then displays a corresponding image from WoW
function setBackground(fahrenheit) {
  if (fahrenheit > 100) {
    wowimg.style.backgroundImage = "url(WoWPhotos/Firelands.jpg)";
    zoneName.innerHTML = 'The Firelands';

  }
  else if (fahrenheit > 92) {
    wowimg.style.backgroundImage = "url(WoWPhotos/BarrensIllustrated.jpg)";
    zoneName.innerHTML = 'The Barrens';

  }
  else if (fahrenheit > 87) {
    wowimg.style.backgroundImage = "url(WoWPhotos/ThousandNeedlesIllustrated.jpg)";
    zoneName.innerHTML = 'Thousand Needles';

  }
  else if (fahrenheit > 79) {
    wowimg.style.backgroundImage = "url(WoWPhotos/UnGoroIllustrated.png)";
    zoneName.innerHTML = "Un'goro Crater";

  }
  else if (fahrenheit > 74) {
    wowimg.style.backgroundImage = "url(WoWPhotos/ScholazarBasin.jfif)";
    zoneName.innerHTML = 'Scholazar Basin';

  }
  else if (fahrenheit > 69) {
    wowimg.style.backgroundImage = "url(WoWPhotos/KazenIllustrasted.jpeg)";
    zoneName.innerHTML = 'Kezan';

  }
  else if (fahrenheit > 62) {
    wowimg.style.backgroundImage = "url(WoWPhotos/JadeForestIllustrated.png)";
    zoneName.innerHTML = 'The Jade Forest';

  }
  else if (fahrenheit > 54) {
    wowimg.style.backgroundImage = "url(WoWPhotos/ElwynnForestIllustrated.png)";
    zoneName.innerHTML = 'Elwynn Forest';

  }
  else if (fahrenheit > 49) {
    wowimg.style.backgroundImage = "url(WoWPhotos/TeldrassilIllustrated.jpg)";
    zoneName.innerHTML = 'Teldrassil';

  }
  else if (fahrenheit > 39) {
    wowimg.style.backgroundImage = "url(WoWPhotos/GrizzlyHillsIllustrated)";
    zoneName.innerHTML = 'Grizzly Hills';

  }
  else if (fahrenheit > 29) {
    wowimg.style.backgroundImage = "url(WoWPhotos/SP.png)";
    zoneName.innerHTML = 'The Storm Peaks';

  }
  else if (fahrenheit > 19) {
    wowimg.style.backgroundImage = "url(WoWPhotos/DunMoroghIllustrated.jpg)";
    zoneName.innerHTML = 'Dun Morogh';

  }
  else {
    wowimg.style.backgroundImage = "url(WoWPhotos/FrozenThroneIllustrated.jpg)";
    zoneName.innerHTML = 'The Frozen Throne';

  }
}

// Allow enter to submit search
const searchBar = document.getElementById("search-bar")
searchBar.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    $("#search-icon").click();
  }
});

