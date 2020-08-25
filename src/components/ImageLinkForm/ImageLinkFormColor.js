import React from 'react'; 
import './ImageLinkForm.css';

const ImageLinkFormColor = ({ onInputChange, onPictureSubmitColor }) => {
	return (
			<div>
				<p className='f3'>
					{'This Magic Brain will also detect and display colors from your pictures. Give it a try!'}
				</p>
				<div className='center'>
					<div className='form center pa4 br3 shadow-5 mt3 mb3'>
						<input className='f4 pa2 w-70 center'
								placeholder='Enter Image URL' 
								type='text' 
								onChange={onInputChange}
						/>
						<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' 
								onClick={onPictureSubmitColor}
						>Detect</button>
					</div>
				</div>
			</div>

		)
}



export default ImageLinkFormColor;