// Init Storage class
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init Weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Init UI class
const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // call change location 
  weather.changeLocation(city, state);

   // Set location in local storage
   storage.setLocationData(city, state);

  // Get and display weather
  getWeather();

  // Clear form
  document.getElementById('city').value = '';
  document.getElementById('state').value = '';

  // Close Modal
  $('#locModal').modal('hide');
})

function getWeather(){
  weather
    .getWeather()
    .then(results => {
      // console.log(results);
      ui.paint(results)
    })
    .catch(err => console.log(err));
};
