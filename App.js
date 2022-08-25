

let button = document.getElementById("get-location");
let button_2 = document.getElementById("random");


navigator.geolocation.getCurrentPosition((position) => {
  let latt = position.coords.latitude;
  let longg = position.coords.longitude;


  window.initMap = initMap(latt,longg);

});

function initMap(latt,longg) {
 
  const uluru = { lat: latt, lng: longg};
  
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

// Button for return to User location
button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    window.initMap = initMap(lat,long);
  });
});

function getRandomFloat(min, max, decimals) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);

  return parseFloat(str);
}

//Button for Random location
button_2.addEventListener("click", () => {
  
    window.initMap = initMap(getRandomFloat(0,100,5),getRandomFloat(0,100,5));

});




