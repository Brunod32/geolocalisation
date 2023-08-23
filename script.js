/********************* Geolocalisation *********************/

let locData = document.getElementById("locData");

// Récupérer la position via l'API Geolocalisation
let localisation = navigator.geolocation.getCurrentPosition(
    function (position) {
        for (key in position.coords) {
            // console.log(key + ' : ' + position.coords[key]);

            // Créer une ul dans locData
            let geoLocInfo = document.createElement("ul");
            locData.appendChild(geoLocInfo);

            // Créer les li dans geoLocInfo
            let geoLocInfoLi = document.createElement("li");
            // Créer les noeud pour chaque ligne de data de l'API Geolocalisation
            geoLocInfoLi.appendChild(document.createTextNode(key + ' : ' + position.coords[key]));
            geoLocInfo.appendChild(geoLocInfoLi);
        }
        // console.log('lat : ' + position.coords.latitude);
        // console.log('lon : ' + position.coords.longitude);
    }
);

