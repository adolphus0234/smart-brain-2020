import React from 'react';
import './ListColours.css';
// import { colorNames } from './colorNameArray';

class ListColours extends React.Component {

	// changeColor = () => {
	// const hexCode = document.getElementById('hex-code');
	// const rgbCode = document.getElementById('rgb-code');
	// const colorBar = document.getElementById('color-bar');	
	// 		hexCode.textContent = `hex: ${this.props.hexValue}`;
	// 		colorBar.style.background = `${this.props.hexValue}`;
	// 		colorBar.style.color = `${this.props.hexValue}`;
	// 		return rgbCode.textContent = `${colorBar.style.background};`;	
	// }
	convertToRGB = (hex) => {	
	    if(hex.length === 3){
	        hex = hex.replace(/.{1,1}/g, "$&$&");
	    }
	   	 let rgb = hex.match(/.{1,2}/g);

	     let rgbArray = [
	        `rgb(${parseInt(rgb[0], 16)},`,
	        ` ${parseInt(rgb[1], 16)},`,
	        ` ${parseInt(rgb[2], 16)})`
	    ]; 
	     return rgbArray;
}

// 	colorNameText = () => {
// 	    for (let i = 0; i < colorNames.length; i++) {
// 	    if (colorNames[i][0].includes('FBE7B2')) {
// 	    	console.log(colorNames[i][1]);
// 	    	let nameOfColor = colorNames[i][1]
// 	return nameOfColor;
// 	        }
// 	    }
// }

	render(props) {



	return (
		<div className='F4 bg-white-20 br4 shadow-5 list-colors' style={{display: 'flex', justifyContent: 'center'}}>
			<div id='hex-code' className='ma3'>
			 {`hex: #${this.props.hexValue.slice(1)}`}
			</div>
			<div id='rgb-code' className='ma3 w-40'>
			 {this.convertToRGB(`${this.props.hexValue.slice(1)}`)}
			</div>
			<div id='color-bar' 
				 className='ma3 w-20 br3 shadow-5 grow' 
				 style={{background: `${this.props.hexValue}`, color: `${this.props.hexValue}` }}
				 >
			{`.`}
			</div>
			<div>
				 {//{`${this.colorNameText()}`}
				}
			</div>
		</div>
		);
	}
}


export default ListColours;