import { createContext, useState } from "react";


export const WeatherCardContext = createContext({
  weather: [],
  setWeather: () => {}
})

export const WeatherCardProvider = ({ children }) => {

	const [ weather, setWeather ] = useState([]);
	const value = { weather, setWeather};

	return <WeatherCardContext.Provider value={value}>{children}</WeatherCardContext.Provider> 
}
