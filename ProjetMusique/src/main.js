// Initialisation de la carte
var map = L.map('map',{
  center:[20,0], // coordonées au centre quand on ouvre la carte
  zoom: 2, // zoom par défaut
  worldCopyJump: false, // pour pas avoir des map à l'infini
  maxBoundsViscosity: 0.0,
  maxBounds: [[-90, -180], [90, 180]], // créé la zone dans laquelle on a le droit de naviguer
  minZoom: 2.2 // zoom minimum autorisé
});

// Ajouter un fond de carte OpenStreetMap
L.tileLayer('https://tile.jawg.io/9e2efa26-cd51-4996-9b56-6f76849fa505/{z}/{x}/{y}{r}.png?access-token=zHeBjFw0wCicmiOOAcCGiNyDg2937xt0RwGIjy6f9okkfU7kf2P5BLKaXem1i0wK', { //style de la carte
  attribution: '<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  accessToken: '<zHeBjFw0wCicmiOOAcCGiNyDg2937xt0RwGIjy6f9okkfU7kf2P5BLKaXem1i0wK>' // Le token pour avoir accès au template
}).addTo(map);



// Données des playlists par continent
var playlists = { //Dictionnaires de playlists
  "Europe": "https://open.spotify.com/embed/playlist/4MCSvXgcWBu3ShaCtTbB89?utm_source=generator&theme=0",
  "Amerique du Nord": "https://open.spotify.com/embed/playlist/4MCSvXgcWBu3ShaCtTbB89?utm_source=generator&theme=0",
  "Afrique": "https://open.spotify.com/embed/playlist/4MCSvXgcWBu3ShaCtTbB89?utm_source=generator&theme=0",
  "Asie": "https://open.spotify.com/embed/playlist/4MCSvXgcWBu3ShaCtTbB89?utm_source=generator&theme=0",
  "Oceanie": "https://open.spotify.com/embed/playlist/4MCSvXgcWBu3ShaCtTbB89?utm_source=generator&theme=0",
  "Amerique du Sud": "https://open.spotify.com/embed/playlist/0deJgJeYkA36dDBcCeV67z?utm_source=generator&theme=0"

};

// Coordonnées approximatives des continents
var locations = { //dictionnaires des locations
  "Europe": [50, 10],
  "Amerique du Nord": [40, -100],
  "Afrique": [0, 20],
  "Asie": [30, 100],
  "Oceanie": [-25, 135],
  "Amerique du Sud": [-15, -65]
};

// Ajouter les marqueurs
Object.keys(playlists).forEach(continent => {
  L.marker(locations[continent]).addTo(map)
      .bindPopup(`<iframe style="border-radius:12px" src="${playlists[continent]}" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`, { minWidth: "500", className: 'custom-style'});
});
