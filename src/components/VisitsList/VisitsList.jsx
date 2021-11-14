import "./VisitsList.css";
import Visit from "../Visit/Visit";


const VisitsList = ({visits}) => {
  return (
    <div className="visits-list">
      <h2>Places I have visited</h2>

      <div className="list">
        {visits.length > 0 && visits.map((visit, index) => {
          return <Visit key={index} coordinates={visit}/>
        })}
      </div>

    </div>
  );
}

export default VisitsList;