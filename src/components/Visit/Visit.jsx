const Visit = ({coordinates}) => {
  return (
    <div className="visit">
      {coordinates &&
      <div className="coordinates">
        <p>Latitude: {Number(coordinates.lat).toFixed(3)}</p>
        <p>Longitude: {Number(coordinates.lng).toFixed(3)}</p>
        <label htmlFor="days">Stayed for: </label>
        <input id="days" type="number"/> days
        <label></label>
        <select>

        </select>
      </div>}
    </div>
  );
}

export default Visit;