import "./Visit.css";


const Visit = ({coordinates}) => {
  return (
    <div>
      {coordinates &&
      <div className="visit">
        <div className="coordinates">
          <p>
            {`Coordinates: 
            ${Number(coordinates.lat).toFixed(6)} - 
            ${Number(coordinates.lng).toFixed(6)}`
            }
          </p>
        </div>

        <div className="properties">
          <div className="days">
            <label htmlFor="days">Stayed for </label>
            <input id="days" type="text"/> days
          </div>

          <div className="purpose">
            <label>Purpose </label>
            <select>
              <option value="personal">Personal</option>
              <option value="work">Work</option>
            </select>
          </div>

        </div>
      </div>
      }
    </div>);
}

export default Visit;