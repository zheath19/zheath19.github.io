// Grabbing Elements from the DOM to change later
let report = document.getElementById("weather-report");
let wowimg = document.getElementById("weather-display");
let zoneName = document.getElementById("wow-location");
let $zoneName = $("#wow-location");

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
          const humidity = data.main.humidity;
          const desc = data.weather[0].description;
          

          // Convert int temp to fahrenheit
          let fahrenheit = (temp * 9) / 5 + 32;
          fahrenheit = Math.round(fahrenheit);

          // Change Page elements to match weather
          report.innerText = `It is ${fahrenheit}°F with ${desc} in ${place}`;
          setBackground(fahrenheit);
          // Remove and add classes to wow-location to animate it
          $zoneName.toggleClass( "fadeAnimation" );
          $zoneName.toggleClass("scale");
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
          const humidity = data.main.humidity;
          const desc = data.weather[0].description;

          // Convert int temp to fahrenheit
          let fahrenheit = (temp * 9) / 5 + 32;
          fahrenheit = Math.round(fahrenheit);

          // Change Page elements to match weather
          report.innerText = `It is ${fahrenheit}°F with ${desc} in ${place}`;
          setBackground(fahrenheit);
           // Remove and add classes to wow-location to animate it
           $zoneName.toggleClass("fadeAnimation");
           $zoneName.toggleClass("scale");

          msg.textContent = "";
          form.reset();
        })
        .catch (err => {
          // Display Error message if no data is returned from search
          msg.innerHTML = 'Enter a Valid City Name';
        });
});

// Takes in current temp and then displays a corresponding image from WoW and its subsequent BGM
function setBackground(fahrenheit) {
  if (fahrenheit > 100) {
    wowimg.style.backgroundImage = "url(WoWPhotos/Firelands.jpg)";
    zoneName.innerHTML = 'The Firelands';
    changeMusic('Firelands');

  }
  else if (fahrenheit > 92) {
    wowimg.style.backgroundImage = "url(WoWPhotos/BarrensIllustrated.jpg)";
    zoneName.innerHTML = 'The Barrens';
    changeMusic('Barrens');

  }
  else if (fahrenheit > 87) {
    wowimg.style.backgroundImage = "url(WoWPhotos/ThousandNeedlesIllustrated.jpg)";
    zoneName.innerHTML = 'Thousand Needles';
    changeMusic('ThousandNeedles');

  }
  else if (fahrenheit > 79) {
    wowimg.style.backgroundImage = "url(WoWPhotos/UnGoroIllustrated.png)";
    zoneName.innerHTML = "Un'goro Crater";
    changeMusic("Un'goro");

  }
  else if (fahrenheit > 74) {
    wowimg.style.backgroundImage = "url(WoWPhotos/ScholazarBasin.jfif)";
    zoneName.innerHTML = 'Scholazar Basin';
    changeMusic('ScholazarBasin');

  }
  else if (fahrenheit > 69) {
    wowimg.style.backgroundImage = "url(WoWPhotos/KazenIllustrasted.jpeg)";
    zoneName.innerHTML = 'Kezan';
    changeMusic('Kezan');

  }
  else if (fahrenheit > 62) {
    wowimg.style.backgroundImage = "url(WoWPhotos/JadeForestIllustrated.png)";
    zoneName.innerHTML = 'The Jade Forest';
    changeMusic('JadeForest');

  }
  else if (fahrenheit > 54) {
    wowimg.style.backgroundImage = "url(WoWPhotos/ElwynnForestIllustrated.png)";
    zoneName.innerHTML = 'Elwynn Forest';
    changeMusic('ElwynnForest');

  }
  else if (fahrenheit > 49) {
    wowimg.style.backgroundImage = "url(WoWPhotos/TeldrassilIllustrated.jpg)";
    zoneName.innerHTML = 'Teldrassil';
    changeMusic('Teldrassil');

  }
  else if (fahrenheit > 39) {
    wowimg.style.backgroundImage = "url(WoWPhotos/GrizzlyHillsIllustrated.png)";
    zoneName.innerHTML = 'Grizzly Hills';
    changeMusic('GrizzlyHills');

  }
  else if (fahrenheit > 29) {
    wowimg.style.backgroundImage = "url(WoWPhotos/SP.png)";
    zoneName.innerHTML = 'The Storm Peaks';
    changeMusic('StormPeaks');

  }
  else if (fahrenheit > 19) {
    wowimg.style.backgroundImage = "url(WoWPhotos/DunMoroghIllustrated.jpg)";
    zoneName.innerHTML = 'Dun Morogh';
    changeMusic('DunMorogh');

  }
  else {
    wowimg.style.backgroundImage = "url(WoWPhotos/FrozenThroneIllustrated.jpg)";
    zoneName.innerHTML = 'The Frozen Throne';
    changeMusic('FrozenMarch');

  }
}

// Changes audio player to host song. Song should have a corresponding .mp3 file
function changeMusic(song) {
  // Pause player to prevent bugs
  pauseSong();
  audio.src = `WoWMusic/${song}.mp3`;
  title.innerHTML = `${song}`;

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


// Everything Related to Audio Player
const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');
let volume = document.querySelector("#volume-control");

// Update Song to given song
function loadSong(song) {
  title.innerText = song;
  audio.src = `WoWMusic/${song}.mp3`;
}

// Play Button Event Listener
playBtn.addEventListener('click', () => {
  
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
})

// Progress bar event listeners
// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Time of song
audio.addEventListener('timeupdate',DurTime);

// Allow for volume to be controlled with slider
volume.addEventListener("change", function(e) {
audio.volume = e.currentTarget.value / 100;
});


// Signals audio to play
function playSong() {
  musicContainer.classList.add('play');
  title.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  playBtn.style.backgroundImage = "url(WoWPhotos/goldplay.png)";

  audio.play();

}

// Signals Audio to pause
function pauseSong() {
  musicContainer.classList.remove('play');
  title.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  playBtn.style.backgroundImage = "url(WoWPhotos/goldpause.png)";

  audio.pause();
}


// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

//get duration & currentTime for Time of song
function DurTime (e) {
	const {duration,currentTime} = e.srcElement;
	var sec;
	var sec_d;

	// define minutes currentTime
	let min = (currentTime==null)? 0:
	 Math.floor(currentTime/60);
	 min = min <10 ? '0'+min:min;

	// define seconds currentTime
	function get_sec (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}else{
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		 }
	} 

	get_sec (currentTime,sec);

	// change currentTime DOM
	currTime.innerHTML = min +':'+ sec;

	// define minutes duration
	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	} 

	// define seconds duration
	
	get_sec_d (duration);

	// change duration DOM
	durTime.innerHTML = min_d +':'+ sec_d;
		
};


// Interactive Map Stuff
// Create OpenLayers Map
var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    // Start map on Newberg
    center: ol.proj.fromLonLat([-122.98, 45.3]),
    zoom: 6
  })
});

// Define longitude/latitude array outside to be used as arg for search 
let lonlat = [2];
// Set default location to newberg
lonlat[0] = -122.98;
lonlat[1] = 45.3;

// When map is clicked store latitude/longitude
map.on('click', function(e) {
  // Pixel of click on map
  var coords = map.getCoordinateFromPixel(e.pixel);
  // Use Coordinates to get longitude/latitude
  lonlat = ol.proj.toLonLat(coords);
  
  // Display Current coordinates
  document.getElementById("lon-lat").innerHTML = `Longitude: ${lonlat[0].toFixed(2)}. Latitude: ${lonlat[1].toFixed(2)}`; 
  // Remove Error status if needed
  document.getElementById("lon-lat").classList.remove("error"); 
}); 

// When Search button by map is pressed, return weather for coordinates found from click
const searchButton = document.querySelector("#map-search"); 
searchButton.addEventListener('click', function(e) {

  const api = "d94484b99eae90a41ba0f3597d4dcf30";
  const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lonlat[1]}&lon=${lonlat[0]}&appid=${api}&units=metric`;

      // Using fetch to get data
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temp } = data.main;
          const place = data.name;
          const humidity = data.main.humidity;
          const desc = data.weather[0].description;
          
          // Only display Weather if a real location is found
          if (place) {
            // Convert int temp to fahrenheit
          let fahrenheit = (temp * 9) / 5 + 32;
          fahrenheit = Math.round(fahrenheit);

          // Change Page elements to match weather
          report.innerText = `It is ${fahrenheit}°F with ${desc} in ${place}`;
          setBackground(fahrenheit);
          // Remove and add classes to wow-location to animate it
          $zoneName.toggleClass( "fadeAnimation" );
          $zoneName.toggleClass("scale");

          } else {
            // Display Error Message 
            document.getElementById("lon-lat").innerHTML = "Could Not Find City Near Coordinates.";
            // Add error class to display message as red and such
            document.getElementById("lon-lat").classList.add("error");
          }
        });
});


// When Random Button is pressed generate random long/lat and search for the weather there
const randomButton = document.querySelector("#random-button"); 
randomButton.addEventListener('click', function(e) {

  // List of Possible Sample Cities 
  let citiesList = ["Munich", "Los Angeles"];
  // Choose a random city from the list
  let randCity = citiesList[Math.round((Math.random() * (citiesList.length - 1)))];

  const api = "d94484b99eae90a41ba0f3597d4dcf30";
  const base = `https://api.openweathermap.org/data/2.5/weather?q=${randCity}&appid=${api}&units=metric`;

      // Using fetch to get data
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temp } = data.main;
          const place = data.name;
          const humidity = data.main.humidity;
          const desc = data.weather[0].description;
          

          // Convert int temp to fahrenheit
          let fahrenheit = (temp * 9) / 5 + 32;
          fahrenheit = Math.round(fahrenheit);

          // Change Page elements to match weather
          report.innerText = `It is ${fahrenheit}°F with ${desc} in ${place}`;
          setBackground(fahrenheit);
          // Remove and add classes to wow-location to animate it
          $zoneName.toggleClass( "fadeAnimation" );
          $zoneName.toggleClass("scale");
        });
});