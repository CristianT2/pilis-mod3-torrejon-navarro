import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import { getWeather } from './service';

function App() {

  
  const [ weather, setWeather ] = useState([]);
  useEffect(() => {
    getWeather()
    .then((data) => {
      setWeather(data);
    })
    .catch((err) => console.log (err)); 
  },[]);

  return (
    <div className="App">
      <Card card={weather}/>
    </div>
  );
}

export default App;
