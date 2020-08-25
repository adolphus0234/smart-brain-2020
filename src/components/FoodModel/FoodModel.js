import React from 'react';
import ListIngredients from './ListIngredients';
import Scroll from './Scroll';

const FoodModel = ({ ingredients, foodFetch, timeout }) => {
	const foodModelComponent = ingredients.map((item, i) => {
			return <ListIngredients 
					key={i} 
					foodItem={ingredients[i].name} 
					probability={ingredients[i].value}
					/>
		})
	
		if (foodFetch === true && timeout === false) {
			return <h1>Please wait...</h1>

		} else if (foodFetch === true && timeout === true) {
			return <h1>Server is not responding. Please try again.</h1>
			
		} else if (foodFetch === 'false') {
			return(
				<div>
					<p className='f3'>
					   {`Ingredients: ${ingredients.length}`}
					</p>
					<Scroll>
					   {foodModelComponent}
					</Scroll>
				</div>
				);
			} else {
				return (
					<div></div>
					);
			}
}


export default FoodModel;