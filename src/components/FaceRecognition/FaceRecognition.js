import React from 'react';
import FaceModel from './FaceModel';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box, faceFetch, timeout, apiModelFail }) => {
	console.log(apiModelFail);

		if (apiModelFail === true) {
			return (	
				<div>
					<div className='center ma'>
						<div className='absolute mt2'>
							<h1>This image does not contain a face.</h1>
							<img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' style={{marginBottom: '15px'}}/>
						</div>
					</div>
				</div>
				);
		} 

			if (faceFetch === true && timeout === false) {
			return (	
				<div>
					<div className='center ma'>
						<div className='absolute mt2'>
							<h1>Please wait...</h1>
							<img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' style={{marginBottom: '15px'}}/>
						</div>
					</div>
				</div>
				);

		} else if (faceFetch === true && timeout === true) {

				return (	
				<div>
					<div className='center ma'>
						<div className='absolute mt2'>
							<h1>Server is not responding. Please try again.</h1>
							<img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' style={{marginBottom: '15px'}}/>
						</div>
					</div>
				</div>
				);

		} else {

			return (
				<div>
					<div className='center ma'>
						<div className='absolute mt2'>
							<img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' style={{marginBottom: '15px'}}/>
							<div>
								<FaceModel box={box} />
							</div>
						</div>
					</div>
				</div>
				);
  		}
}

export default FaceRecognition;