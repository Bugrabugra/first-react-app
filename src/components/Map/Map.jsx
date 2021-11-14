import "leaflet/dist/leaflet.css";
import "./Map.css";
import L from "leaflet";
import {useEffect, useState} from "react";


const Map = ({passPlace}) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    console.log("Map loaded")
    const map = L.map('map').setView([ 39.334297, 34.343262], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    setMap(map);

    map.on("click", onClickMap);

    function onClickMap(e) {
      passPlace(e.latlng);
      const newMarker = new L.marker(e.latlng).addTo(map);
    }
  }, []);


  return (
    <div>
      <div id="map"></div>
    </div>
  );
}

export default Map;