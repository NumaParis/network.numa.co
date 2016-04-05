var rawdata = [
  {
    "name": "NUMA",
    "website": "numa.co",
    "city": "Paris",
    "country": "France",
    "lon": 2.34954,
    "lat": 48.86763,
    "numa": "TRUE",
    "atalanta": "FALSE",
    "gfe": "FALSE",
    "gan": "FALSE"
  },
  {
    "name": "NUMA Moscow",
    "website": "numa.co",
    "city": "Moscow",
    "country": "Russia",
    "lon": 37.645531,
    "lat": 55.726055,
    "numa": "TRUE",
    "atalanta": "FALSE",
    "gfe": "FALSE",
    "gan": "FALSE"
  },
  {
    "name": "NUMA Bengaluru",
    "website": "numa.co",
    "city": "Bengaluru",
    "country": "India",
    "lon": 77.599271,
    "lat": 12.976594,
    "numa": "TRUE",
    "atalanta": "FALSE",
    "gfe": "FALSE",
    "gan": "FALSE"
  },
  {
    "name": "NUMA Casablanca",
    "website": "numa.co",
    "city": "Casablanca",
    "country": "Morroco",
    "lon": -7.635305,
    "lat": 33.548591,
    "numa": "TRUE",
    "atalanta": "FALSE",
    "gfe": "FALSE",
    "gan": "FALSE"
  },
  {
    "name": "NUMA Barcelona",
    "website": "numa.co",
    "city": "Barcelona",
    "country": "Spain",
    "lon": 2.185167,
    "lat": 41.381992,
    "numa": "TRUE",
    "atalanta": "FALSE",
    "gfe": "FALSE",
    "gan": "FALSE"
  },
  {
    "name": "NUMA Mexico",
    "website": "numa.co",
    "city": "Mexico City",
    "country": "Mexico",
    "lon": -99.168771,
    "lat": 19.40881,
    "numa": "TRUE",
    "atalanta": "FALSE",
    "gfe": "FALSE",
    "gan": "FALSE"
  },
  {
    "name": "Beta-i",
    "website": "http://beta-i.pt/",
    "city": "Lisboa",
    "country": "Portugal",
    "lon": -9.142385,
    "lat": 38.732435,
    "numa": "FALSE",
    "atalanta": "TRUE",
    "gfe": "FALSE",
    "gan": "FALSE"
  },
  {
    "name": "H-Farm",
    "website": "http://www.h-farm.com/",
    "city": "Venice",
    "country": "Italy",
    "lon": 12.427597,
    "lat": 45.564845,
    "numa": "FALSE",
    "atalanta": "TRUE",
    "gfe": "FALSE",
    "gan": "FALSE"
  },
  {
    "name": "Tetuan Valley",
    "website": "http://tetuanvalley.com/",
    "city": "Madrid",
    "country": "Spain",
    "lon": -3.71806,
    "lat": 40.41216,
    "numa": "FALSE",
    "atalanta": "TRUE",
    "gfe": "FALSE",
    "gan": "FALSE"
  },
  {
    "name": "Vocus UpStart",
    "website": "http://www.vocusupstart.com.au/",
    "city": "Cottesloe",
    "country": "Western Australia",
    "lon": 115.761735,
    "lat": -31.996453,
    "numa": "FALSE",
    "atalanta": "FALSE",
    "gfe": "FALSE",
    "gan": "TRUE"
  },
  {
    "name": "HubX",
    "website": "http://www.hubx.biz/",
    "city": "Little Rock",
    "country": "USA",
    "lon": -92.289595,
    "lat": 34.746481,
    "numa": "FALSE",
    "atalanta": "FALSE",
    "gfe": "FALSE",
    "gan": "TRUE"
  },
  {
    "name": "Straight Shot",
    "website": "http://straightshot.co/",
    "city": "Omaha",
    "country": "USA",
    "lon": -95.997988,
    "lat": 41.252363,
    "numa": "FALSE",
    "atalanta": "FALSE",
    "gfe": "FALSE",
    "gan": "TRUE"
  },
  {
    "name": "Blue Ridge Labs",
    "website": "https://labs.robinhood.org/",
    "city": "NYC",
    "country": "USA",
    "lon": -73.993003,
    "lat": 40.688901,
    "numa": "FALSE",
    "atalanta": "FALSE",
    "gfe": "FALSE",
    "gan": "TRUE"
  },
  {
    "name": "Seed Sumo",
    "website": "http://www.seedsumo.com/",
    "city": "College Station",
    "country": "USA",
    "lon": -96.382103,
    "lat": 30.599305,
    "numa": "FALSE",
    "atalanta": "FALSE",
    "gfe": "FALSE",
    "gan": "TRUE"
  },
  {
    "name": "StartupYard",
    "website": "http://startupyard.com/",
    "city": "Prague",
    "country": "Czech Republic",
    "lon": 14.402744,
    "lat": 50.066358,
    "numa": "FALSE",
    "atalanta": "FALSE",
    "gfe": "FALSE",
    "gan": "TRUE"
  },
  {
    "name": "Flat6labs",
    "website": "http://www.flat6labs.com/",
    "city": "Cairo",
    "country": "Egypt",
    "lon": 31.21215,
    "lat": 30.046231,
    "numa": "FALSE",
    "atalanta": "FALSE",
    "gfe": "FALSE",
    "gan": "TRUE"
  }
];



function getGeoJson(object) {

    var isNUMA = object.numa === 'TRUE';
    var isGFE = object.gfe === 'TRUE';
    var isAtalanta = object.atalanta === 'TRUE';
    var isGAN = object.gan === 'TRUE';

    var colors = {
        roseFushia: "#E50064",
        roseCandy: "#E94190",
        bleuKlein:"#302683",
        turquoise: "#1CABBB",
        jaune: "#FFF489",
        ardoise: "#00587D",
        celadon: "#8AC5C6",
        raisin: "#731A66",
        sable: "#FEE9C9",
    }

    var color = colors.turquoise;

    if(isNUMA){
        color = colors.bleuKlein;
    }

    
    var geojson = {
      "type": "Feature",
      "geometry": {
        "coordinates": [
          object.lon,
          object.lat
        ],
        "type": "Point"
      },
      "properties": {
        "title": object.name,
        "NUMA": isNUMA,
        "GFE": isGFE,
        "ATALANTA": isAtalanta,
        "GAN": isGAN,
        "marker-color": color,
        "marker-size": "large",
        "marker-symbol": "rocket"
      }
    }

    return geojson; 
}


var mapdata = rawdata.map(getGeoJson);




