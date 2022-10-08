import Card from "./Card";
import '.Cards.css';

const Cards = ({cards}) => {

  return (
    <div className="container">
			<div className="row">
				<div className="col-md-3">
					{cards.map((card) =>
						<Card card={card}/>
					)}
				</div>
			</div>
		</div>
  );
};

export default Cards;