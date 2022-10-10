
const Card = ({card}) => {

	const { timezone, longitude, latitude, current_weather } = card;

  return(
		<div className="container">
			<div className="card col-md-3">
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrx1TR2E-OzrO5GdCVhs7k7Iu1XL5XVMZX_g&usqp=CAU" alt="imagen" />
				<div className="card-body">
					<h4 className="card-title">{timezone}</h4>
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