import {useEffect, useState} from 'react'
import './App.css'
import Map from "../components/Map/Map";
import VisitsList from "../components/VisitsList/VisitsList";

function App() {
  const [place, setPlace] = useState(null);
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    setVisits(visits => [...visits, place])
  }, [place])

  return (
    <div className="app">
      <VisitsList visits={visits}/>
      <Map passPlace={setPlace}/>
    </div>
  )
}

export default App
