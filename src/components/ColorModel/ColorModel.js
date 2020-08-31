import React from 'react';
import ListColours from './ListColours';
import Scroll2 from './Scroll2';
import '../FaceRecognition/FaceRecognition.css';

const ColorModel = ({ colors, colorFetch, timeout, invalidUrl }) => {

	const colorModelComponent = colors.map((color, i) => {
			return <ListColours key={i} hexValue={colors[i].raw_hex} />
		})

		if (invalidUrl === true) {
			return <p className='font-size'>Enter valid URL.</p>
		}
	
		if (colorFetch === true && timeout === false) {
			return <p className='font-size'>Please wait...</p>

		} else if (colorFetch === true && timeout === true) {
			return <p className='font-size'>Server is not responding. Please try again.</p>

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