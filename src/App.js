import { Routes, Route } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import './App.css';
import { WeatherCardContext } from './contexts/WeatherCardContext';
import CardCreation from './routes/Card/CardCreation';
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import { getWeather } from './service';
import Login from './routes/Login/Login';


function App() {

   
  const { setWeather } = useContext(WeatherCardContext);

    useEffect(()=> {
      getWeather()
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => console.log(err));
   }, [setWeather])

   return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Navigation/>}>
            <Route index element={ <Home/> } />
            <Route path='login' element={ <Login/> }/>
            <Route path='card/create' element={<CardCreation/>}/>
          </Route>
      </Routes>
    </div>
  )
}

export default App;
