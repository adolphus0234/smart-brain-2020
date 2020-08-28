import React from 'react';
import FaceModel from './FaceModel';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box, faceFetch, timeout, invalidUrl, apiModelFail }) => {
	console.log(invalidUrl);

		if (invalidUrl === true) {
			return (	
				<div>
					<div className='center ma'>
						<div className='absolute mt2'>
							<p className='font-size'>Enter Valid URL.</p>
							<img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' style={{marginBottom: '15px'}}/>
						</div>
					</div>
				</div>
				);
		}	
	

		if (apiModelFail === true) {
			return (	
				<div>
					<div className='center ma'>
						<div className='absolute mt2'>
							<p className='font-size'>This image does not contain a face.</p>
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
							<p className='font-size'>Please wait...</p>
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
							<p className='font-size'>Server is not responding. Please try again.</p>
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