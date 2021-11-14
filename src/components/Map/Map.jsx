import "leaflet/dist/leaflet.css";
import "./Map.css";
import L from "leaflet";
import {useEffect, useState} from "react";


const Map = ({passPlace}) => {
  const [map, setMap] = useState(null);

  // const [coordinates, setCoordinates] = useState(null);

  const onClickMap = (e) => {
    // setCoordinates(e.latlng);
    passPlace(e.latlng);
    console.log("Passed");
  };

  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    setMap(map);

    map.on("click", onClickMap);
    console.log("Clicked")
  }, []);


  return (
    <div>
      <div id="map"></div>
    </div>
  );
}

export default Map;