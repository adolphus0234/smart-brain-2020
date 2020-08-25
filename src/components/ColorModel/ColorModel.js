import React from 'react';
import ListColours from './ListColours';
import Scroll2 from './Scroll2';

const ColorModel = ({ colors, colorFetch, timeout }) => {

	const colorModelComponent = colors.map((color, i) => {
			return <ListColours key={i} hexValue={colors[i].raw_hex} />
		})
	
		if (colorFetch === true && timeout === false) {
			return <h1>Please wait...</h1>

		} else if (colorFetch === true && timeout === true) {
			return <h1>Server is not responding. Please try again.</h1>

		} else if (colorFetch === 'false') {
			return(
				<div>
				    <p className='f3'>
				       {`Colors: ${colors.length}`}
				    </p>
				    <Scroll2>
					    {colorModelComponent}
				    </Scroll2>
				</div>
				);
			} else {
				return (
					<div></div>
					);
			}
}


export default ColorModel;