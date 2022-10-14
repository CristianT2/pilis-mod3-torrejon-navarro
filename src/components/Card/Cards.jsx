import { useContext } from "react";
import { WeatherCardContext } from "../../contexts/WeatherCardContext";
import Card from "./Card";
import './Cards.css';

const Cards = () => {

	const { cards } = useContext(WeatherCardContext);

	return (

			cards?.length>0 ?(
					cards.map(ubicacion => (
						<div className="mt-3 col-6 mx-auto card p-3 shadow-lg" key={ubicacion.id} >
							<center><h1><font color="blue">Ciudad</font></h1></center>
							<i class="fa fa-city">{" Ciudad: " + ubicacion.city}</i>
							<br />
							<i class="fa fa-location-arrow mt-3">{" Latitud: " + ubicacion.latitude}</i>
							<br />
							<i class="fa fa-location-arrow mt-3">{" Longitud: " + ubicacion.longitude}</i>
							<br />
							<i class="fa fa-wind mt-3">{" Velocidad de Viento: " + ubicacion.winspeed}</i>
							<br />
							<i class="fa fa-temperature-high mt-3">{" Temperatura: " + ubicacion.temperature + "ºC"}</i>
						</div>
					))
				) :
				(
					<p>No hay ubicaciones</p>
				)
		
		// <div >
		// 	{cards?.map((card) => (
		// 		<Card key={card.id} card={card} />
		// 	))}
		// </div>
	)
}

export default Cards
