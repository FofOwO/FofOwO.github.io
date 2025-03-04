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
  "Europe": "https://open.spotify.com/embed/playlist/4phLOaUqkSHvA0DGNEqFhd?si=a44814c8244042ec&pt=c89130790b771bac3c2aff5b0b21219f&theme=0",
  "Amerique du Nord": "https://open.spotify.com/embed/playlist/2i4c496r5pqDcBcrPgZi39?si=273582bf216a47ed&pt=4153185ea7be14fb4254fe08cb1a7247&theme=0",
  "Afrique": "https://open.spotify.com/embed/playlist/3SDwVe49p0psP5fOlsgSqF?si=2bc7acec7c124897&pt=a732fcfb084d8022de88f3e6b466282a&theme=0",
  "Asie": "https://open.spotify.com/embed/playlist/262ujecvemI6NbGo2AAj9P?si=4d5535a1a5d44ee4&pt=f22ed12060ced8a0074144a4211d7d12&theme=0",
  "Oceanie": "https://open.spotify.com/embed/playlist/0qiazrwvI8z3Vj9lECeAXO?si=9786ba9e38714a25&pt=cdeb961a55b4b7a20f5fc9984cec8349&theme=0",
  "Amerique du Sud": "https://open.spotify.com/embed/playlist/39ppLyYXShbUptXaPJfGvB?si=673e89b87d074336&pt=96e9c8ef3f07af7ee56e5e43f2a46389&theme=0",
  "Antarctique": "https://open.spotify.com/embed/playlist/1P7WRBN9zVDx153XYcEuTi?si=4dd69773c8eb403e&pt=d17d02240aac4b8034705d750307c15d&theme=0"

};

// Coordonnées approximatives des continents
var locations = { //dictionnaires des locations
  "Europe": [50, 10],
  "Amerique du Nord": [40, -100],
  "Afrique": [0, 20],
  "Asie": [30, 100],
  "Oceanie": [-25, 135],
  "Amerique du Sud": [-15, -65],
  "Antarctique": [-80, 0]
};

// Ajouter les marqueurs
Object.keys(playlists).forEach(continent => {
  L.marker(locations[continent]).addTo(map)
      .bindPopup(`<iframe style="border-radius:12px" src="${playlists[continent]}" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`, { minWidth: "500", className: 'custom-style'});
});
