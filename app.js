// Init Weather class
const weather = new Weather("Denver", "CO");
// Init UI class
const ui = new UI;

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather(){
  weather
    .getWeather()
    .then(results => {
      // console.log(results);
      ui.paint(results)
    })
    .catch(err => console.log(err));
};
