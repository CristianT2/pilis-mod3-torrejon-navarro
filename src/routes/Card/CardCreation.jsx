import { useContext } from "react";
import './CardCreation.css';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { WeatherCardContext } from "../../contexts/WeatherCardContext";
import { getWeather } from "../../service";



const CardCreation = () => {

	const { weather, setWeather } = useContext(WeatherCardContext);
	const navigate = useNavigate();

	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			city: 'San Salvador de Jujuy',
			latitude: '-24.2053236',
			longitude: '-65.3755957',
		}
	});

	const onSubmit = (data) => {

		getWeather(data.latitude, data.longitude).then(resp => {
			const cardNew = {
				id: weather?.length + 1,
				city: data.city,
				latitude: data.latitude,
				longitude: data.longitude,
				temperature: resp.current_weather?.temperature,
				windspeed: resp.current_weather?.windspeed,
			}
		  	setWeather([...weather, cardNew])
		}).catch(err => {
            console.log(err)
        })

		navigate('/');

		// let dataWeather = getWeather(data.latitude, data.longitude)
		// .then((data) => setWeatherCard(data))
		// .catch((err) => console.log(err));

		// const cardNew = {
		// 	id: weatherCard.length + 1,
		// 	city: weatherCard.city,
		// 	latitude: dataWeather.latitude,
		// 	longitude: dataWeather.longitude,
		// 	temperature: dataWeather.current_weather.temperature,
		// 	windspeed: dataWeather.current_weather.windspeed,
		// }

	// 	setWeatherCard([...weatherCard, cardNew]);
	// 	navigate('/');

	// 	console.log(dataWeather)
	}

  return (
		<div className="container">
			<form onSubmit={handleSubmit(onSubmit)}>
				
				<div className="mb-3">
					<label className="form-label">Ciudad</label>
					<input type="text" className="form-control" id="city" {...register('city',{required:'Debe ingresar un valor.'},)}/>
					<p className="text-danger">{errors.city?.message}</p>
				</div>
				<div className="mb-3">
					<label className="form-label">Latitud</label>
					<input type="text" className="form-control" id="latitud" {...register('latitude',{required:'Debe ingresar un valor.'},)}/>
					<p className="text-danger">{errors.latitude?.message}</p>
				</div>
				<div className="mb-3">
					<label  className="form-label">Longitud</label>
					<input type="text" className="form-control" id="longitud" {...register('longitude',{required:'Debe ingresar un valor.'},)}/>
					<p className="text-danger">{errors.longitude?.message}</p>
				</div>
				
				<div>
					<button type="reset" className="btn btn-warning">Cancelar</button>
					<button type="submit" className="btn btn-success">Guardar</button>
				</div>
			</form>
		</div>
  );
};

export default CardCreation;