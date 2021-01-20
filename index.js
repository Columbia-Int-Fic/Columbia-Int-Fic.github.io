//Scripting for splash screen to disappear upon clicking
const splash = document.querySelector(".splash");
splash.onclick = function() {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 0);
};
mapboxgl.accessToken =
  "pk.eyJ1IjoiamVzc2ljcmVhdGl2ZSIsImEiOiJja2hzNjFkNmUwa3BtMnducGZvNmQwYmZ6In0.wlc4rP4u0x3yzKfZQw8Ojg";

//use this link to find coordinates: https://docs.mapbox.com/search-playground/
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/jessicreative/ckht0rt2p24uv19p33s6h4jpf",
  center: [-2.6559000754302815, -50.826592090829493],
  zoom: 1.5
});

// code from the next step will go here!
var geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-73.982121, 40.741123]
      },
      properties: {
        "marker-color": "#3bb2d0",
        title: "A Doubled Front",
        image: "doubled-images/cover.gif",
        description:
          "A day-in-the-life of a Chinese American healthcare worker reconciling duty and selfless service with questions of identity and belonging in the wake of surging anti-Asian hate.",
        writers: "Benjamine Mo and Victoria Geh",
        tech: "Victoria Geh",
        visuals: "Benjamine Mo",
        minutes: "15",
        link: "doubledfront.html"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-76.349962, 36.230924]
      },
      properties: {
        title: "I See You",
        image: "images/i-see-you/title-1.gif",
        description:
          "Step into the shoes and gloves of an ICU surgeon. You are Dr. Sabrina Kelly as she prepares for her newly adjusted surgical routine during COVID-19.",
        writers: "Payton Geller and Arina Karkhanis",
        tech: "Rishi Chhapolia",
        visuals: "Celia Lê",
        minutes: "15",
        link: "i-see-you-page.html"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-7.801146, 52.880998]
      },
      properties: {
        title: "Sinéad & Louisa",
        image: "images/sinead/cover.jpg",
        description:
          "Two young girls, one in Ireland and the other in Louisiana, rapidly adjust to the struggles (and joys) of virtual learning and staying at home.",
        writers: "Jane Loughman and Elisabeth McLaughlin",
        tech: "Rishi Chhapolia",
        visuals: "Elisabeth McLaughlin",
        minutes: "30",
        link: "sinead-page-1.html"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [126.992443, 37.550951]
      },
      properties: {
        title: "From Bystander to Activist",
        image: "SLimages/storycover.JPG",
        description:
          'As South Korea confronts a crisis of sexual abuse, from widespread spycam crimes to the Nth room, citizens face a world of unjust realities. This piece tells the story of one such person and asks, “What does it mean to be a bystander?"',
        writers: "Sally Jee and Lauren Alcindor",
        tech: "Lauren Alcindor",
        visuals: "Katherine Bibilouri",
        minutes: "30",
        link: "SLstoryfinal.html"
      }
    }, // SERIES 2 BELOW
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [14.233548, 37.622343]
      },
      properties: {
        title: "Masks Off",
        image: "series_2/giordana/Cover.PNG",
        description:
          "Maura and Liliana meet on Instagram through their shared love for art and literature. They decided to meet last year at a pizzeria in Milan and have remained friends since. This story reveals the reality of Covid in Italy, focusing homelessness, financial instability, and relational issues.",
        writers: "Giordana Fiorentino",
        tech: "Victoria Geh",
        visuals: "Jessica Chen",
        minutes: "15",
        link: "series_2/giordana/giordana.html"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-122.445739, 37.753998]
      },
      properties: {
        title: "Trash 2020",
        image: "series_2/Trash2020/images/storycover.png",
        description:
          '"I wonder if people are more like paper or plastic. When they are thrown away, do they give in to the earth or struggle against it indefinitely?"',
        writers: "Lauren Alcindor",
        tech: "Lauren Alcindor",
        visuals: "Yingjie Wang",
        minutes: "15",
        link: "series_2/Trash2020/trash2020twine.html"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-90.070889, 29.999517]
      },
      properties: {
        title: "A Lesson In Which the Writer Sees Herself",
        image: "series_2/elizabeth/Red.jpg",
        description:
          "A meditation on sight, this lyric essay interweaves the anatomical and the anecdotal to distill what it means to see and be seen.",
        writers: "Elisabeth McLaughlin",
        tech: "Jessica Chen",
        visuals: "Elisabeth McLaughlin",
        minutes: "15",
        link: "series_2/elizabeth/ElisabethJan16Version.html"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-90.05264568426435, 35.148979323280926]
      },
      properties: {
        title: "CoviDiary",
        image: "series_2/covidiaryCover.png",
        description:
          "“I miss all those things...I miss my friends. I miss having structure, and having expectations for the way life was supposed to go. Even if those structures and expectations didn’t make me particularly happy - at least they were there.” From March to August 2020, this story details the ups and downs of a high school senior about to become a college freshman in the time of Covid.",
        writers: "Vilanna Wang",
        tech: "Erin Liang",
        visuals: " Tina Wang, Carly Roth",
        minutes: "30",
        link: "series_2/covidiary.html"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-66.0665152105015, 18.449746990033333]
      },
      properties: {
        title: "Prohibido Tocar",
        image: "series_2/coverart.png",
        description:
          "The reflections of a Puerto Rican musician during a pandemic, where nothing was physically destroyed but there was silence on the streets and it was forbidden to play (prohibido tocar).",
        writers: "Ana Valeria",
        tech: "Yingjie Wang",
        visuals: "Cilia Lê",
        minutes: "25",
        //missing
        link: ""
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        //missing legit location
        coordinates: [101.89503266543488, 35.367844995972206]
      },
      properties: {
        title: "4",
        image: "series_2/4/images/Final_Dumpling_Making.png",
        description:
          "The pandemic has taken away any semblance of a normal life away from many people worldwide, but it has also given rare opportunities for unexpected homecomings, such as four siblings finding themselves living under the same roof for the first time in a decade. Have a glimpse at the pandemic life the Chen family have been living through since March. ",
        writers: "Donna Qi",
        tech: "Lauren Alcindor",
        visuals: "Christina Su",
        minutes: "20",
        link: "series_2/4/Donna Story.html"
      }
    }
  ]
};

// add markers to map
geojson.features.forEach(function(marker) {
  // create a HTML element for each feature
  var el = document.createElement("div");
  el.className = "marker";

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          "<h2>" +
            marker.properties.title +
            "</h2>" +
            '<img src="' +
            marker.properties.image +
            '"><br>' +
            "<p>" +
            marker.properties.description +
            "<br><br>" +
            "<b>Writers: </b>" +
            marker.properties.writers +
            "<br><b>Tech: </b>" +
            marker.properties.tech +
            "<br><b>Visuals: </b>" +
            marker.properties.visuals +
            "<br><br><b><u>Estimated reading time:</u></b> " +
            marker.properties.minutes +
            'mins <br><br><a href="' +
            marker.properties.link +
            '" class="enterButton">enter</a><br>' +
            "</p><br>"
        )
    )
    .addTo(map);
});
