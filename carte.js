// Pour la CARTE du Footer CARTE CARTE CARTE CARTE CARTE CARTE du FOOTER
let map = L.map('map').setView([45.439695,4.3871779],13)
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
   attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);

L.marker([45.439695,4.3871779]).addTo(map)