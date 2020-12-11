//Scripting for splash screen to disappear upon clicking
const splash = document.querySelector('.splash');
splash.onclick = function() {
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 0);
}
mapboxgl.accessToken = 'pk.eyJ1IjoiamVzc2ljcmVhdGl2ZSIsImEiOiJja2hzNjFkNmUwa3BtMnducGZvNmQwYmZ6In0.wlc4rP4u0x3yzKfZQw8Ojg';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/jessicreative/ckht0rt2p24uv19p33s6h4jpf/draft',
  center: [-96, 37.8],
  zoom: 3
});

// code from the next step will go here!
var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.032, 38.913]
    },
    properties: {
      title: 'A Doubled Front',
      image: 'doubled-images/cover.gif',
      description: 'A day-in-the-life of a Chinese American healthcare worker reconciling duty and selfless service with questions of identity and belonging in the wake of surging anti-Asian hate.',
      writers: 'Jane Loughman and Elisabeth McLaughlin',
      tech: 'Rishi Chhapolia',
      visuals: 'Elisabeth McLaughlin', 
      minutes: '30',
      link: 'sinead-page-1.html',
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-122.414, 37.776]
    },
    properties: {
      title: 'Sinéad & Louisa',
      image: 'images/sinead/cover.jpg',
      description: 'blah.'
      //just follow the above properties format for A doubled Front.
    }
  }]
};

// add markers to map
geojson.features.forEach(function(marker) {

// create a HTML element for each feature
var el = document.createElement('div');
el.className = 'marker';

// make a marker for each feature and add to the map
new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h2>' + marker.properties.title + '</h2>'
      + '<img src="' + marker.properties.image + '">'
    + '<p>' + marker.properties.description + '<br><br>'
    +'<b>Writers: </b>'+ marker.properties.writers+'<br><b>Tech: </b>'+marker.properties.tech+'<br><b>Visuals: </b>'+marker.properties.visuals+ '<br><br><b><u>Estimated reading time:</u></b> '+ marker.properties.minutes +'mins <br><br><a href="'+marker.properties.link+'" class="enterButton">enter</a><br>'+'</p>'))
  .addTo(map);
});