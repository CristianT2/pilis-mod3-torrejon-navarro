import { useContext } from "react";
import './Home.css';
import { WeatherCardContext } from '../../contexts/WeatherCardContext';
import Cards from '../../components/Card/Cards';

const Home = () => {

	const { weather } = useContext(WeatherCardContext);

  return (
		<>
			<div >
				<Cards cards={weather}/>
			</div>
		</>
  )
}

export default Home;