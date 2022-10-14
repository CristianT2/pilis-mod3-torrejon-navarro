
const Card = ({card}) => {

	const { id, city, longitude, latitude, temperature, windspeed } = card;

  return(
		<div className="container">
			<div className="card col-md-3">
				<div className="card-body">
					<h3 className="card-title">{city}</h3>
					<p>{id}</p>
					<p className="card-text">
						<strong>Latitud: </strong> 
						{latitude}
					</p>
					<p className="card-text">
						<strong>Longitud: </strong> 
						{longitude}
					</p>
					<p className="card-text"><strong>Temperatura: </strong> {temperature} °C</p>
					<p className="card-text"><strong>Velocidad del viento: </strong> {windspeed} Km/h</p>
				</div>
			</div>
		</div>
	)
}

export default Card