const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoibXlyYXQiLCJhIjoiY2txcW1odmRwMHNrYzJucWEzZDh1cWkxdSJ9.TiS21j5t9g7vzcay9pAJFw";

var map = new mapboxgl.Map({
  accessToken: MAPBOX_ACCESS_TOKEN,
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11"
});

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
});

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: centerPosition,
    zoom: 15
  });

  //   add navigation controls
  const navigatonControls = new mapboxgl.NavigationControl();
  map.addControl(navigatonControls);

  const directionControls = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN
  });
  map.addControl(directionControls, "top-left");
}

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48]);
}
