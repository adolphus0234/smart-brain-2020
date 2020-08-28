import React from 'react';
import ListIngredients from './ListIngredients';
import Scroll from './Scroll';
import '../FaceRecognition/FaceRecognition.css';

const FoodModel = ({ ingredients, foodFetch, timeout, invalidUrl }) => {
	
	const foodModelComponent = ingredients.map((item, i) => {
			return <ListIngredients 
					key={i} 
					foodItem={ingredients[i].name} 
					probability={ingredients[i].value}
					/>
		})

		if (invalidUrl === true) {
			return <p className='font-size'>Enter valid URL.</p>
		}
	
		if (foodFetch === true && timeout === false) {
			return <p className='font-size'>Please wait...</p>

		} else if (foodFetch === true && timeout === true) {
			return <p className='font-size'>Server is not responding. Please try again.</p>
			
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