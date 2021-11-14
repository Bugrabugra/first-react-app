import "./VisitsList.css";
import Visit from "../Visit/Visit";
import {useEffect, useState} from "react";


const VisitsList = ({visits}) => {
  // const [visits, setVisits] = useState([]);

  // useEffect(() => {
  //   console.log("Aaa")
  //   console.log("passCoordinates: ", passCoordinates);
  //   console.log("visits: ", visits)
  //   setVisits(visits => [...visits, passCoordinates]);
  //   console.log(visits);
  // }, [passCoordinates])

  return (
    <div className="list">
      <h2>Places I have visited</h2>
      {visits.length > 0 && visits.map((visit, index) => {
        return <Visit key={index} coordinates={visit}/>
      })}
    </div>
  );
}

export default VisitsList;