
const Card = ({card}) => {

	const { timezone, longitude, latitude, current_weather } = card;

  return(
		<div className="container">
			<div className="card col-md-3">
				<img src="" alt="imagen" />
				<div className="card-body">
					<h5 className="card-title">{timezone}</h5>
					<p className="card-text">
						<strong>Latitud: </strong> 
						{latitude}
					</p>
					<p className="card-text">
						<strong>Longitud: </strong> 
						{longitude}
					</p>
					<p className="card-text"><strong>Temperatura: </strong> {current_weather?.temperature} °C</p>
					<p className="card-text"><strong>Velocidad del viento: </strong> {current_weather?.windspeed} Km/h</p>
				</div>
			</div>
		</div>
	)
}

export default Card