const SERVER_DOMAIN = 'https://api.open-meteo.com/v1';

const lat = -24.2053236;
const long = -65.3755957;
export const getWeather = async () => {
  try {
		const response = await fetch(`${SERVER_DOMAIN}/forecast?current_weather=true&latitude=${lat}&longitude=${long}&timezone=America/Argentina/Jujuy`);
		return response.json();
  }catch {
		throw new Error('error');
  }
}