import React from 'react';
import './ListIngredients.css';

class ListIngredients extends React.Component {

	round = (value, decimals) => {
  		return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}



	render(props) {
	return (
		<div className='f4 bg-white-20 br4 shadow-5 list-ingredients' style={{display: 'flex', justifyContent: 'center'}}>
			<div className='w-20 ingredient-name'>
			 {`${this.props.foodItem}`}
			</div>
			<div className='w-20 probability'>
			 {`Probability:`}
			</div>
			<div className='w-20 prob'>
			 {`Prob:`}
			</div>
			<div className='f3 w-20 percentage'>
			{`${this.round(`${this.props.probability*100}`, 1)}%`}
			</div>
		</div>
		);
	}
}


export default ListIngredients;