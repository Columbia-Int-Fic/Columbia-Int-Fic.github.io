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
      coordinates: [-73.982121, 40.741123]
    },
    properties: {
      title: 'A Doubled Front',
      image: 'doubled-images/cover.gif',
      description: 'A day-in-the-life of a Chinese American healthcare worker reconciling duty and selfless service with questions of identity and belonging in the wake of surging anti-Asian hate.',
      writers: 'Benjamine Mo and Victoria Geh',
      tech: 'Victoria Geh',
      visuals: 'Benjamine Mo', 
      minutes: '15',
      link: 'doubledfront.html',
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-76.349962, 36.230924]
    },
    properties: {
      title: 'I See You',
      image: 'images/i-see-you/title-1.gif',
      description: 'Step into the shoes and gloves of an ICU surgeon. You are Dr. Sabrina Kelly as she prepares for her newly adjusted surgical routine during COVID-19.',
      writers: 'Payton Geller and Arina Karkhanis',
      tech: 'Rishi Chhapolia',
      visuals: 'Celia Lê', 
      minutes: '15',
      link: 'i-see-you-page.html',
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-7.801146, 52.880998] 
    },
    properties: {
      title: 'Sinéad & Louisa',
      image: 'images/sinead/cover.jpg',
      description: 'Two young girls, one in Ireland and the other in Louisiana, rapidly adjust to the struggles (and joys) of virtual learning and staying at home.',
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
      coordinates: [126.992443, 37.550951] 
    },
    properties: {
      title: 'From Bystander to Activist',
      image: 'SLimages/storycover.JPG',
      description: 'As South Korea confronts a crisis of sexual abuse, from widespread spycam crimes to the Nth room, citizens face a world of unjust realities. This piece tells the story of one such person and asks, “What does it mean to be a bystander?"',
      writers: 'Sally Jee and Lauren Alcindor',
      tech: 'Lauren Alcindor',
      visuals: 'Katherine Bibilouri', 
      minutes: '30',
      link: 'SLstoryfinal.html',
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
      + '<img src="' + marker.properties.image + '"><br>'
    + '<p>' + marker.properties.description + '<br><br>'
    +'<b>Writers: </b>'+ marker.properties.writers+'<br><b>Tech: </b>'+marker.properties.tech+'<br><b>Visuals: </b>'+marker.properties.visuals+ '<br><br><b><u>Estimated reading time:</u></b> '+ marker.properties.minutes +'mins <br><br><a href="'+marker.properties.link+'" class="enterButton">enter</a><br>'+'</p>'))
  .addTo(map);
});