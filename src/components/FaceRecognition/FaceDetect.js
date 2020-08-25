import React from 'react';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import FaceRecognition from './FaceRecognition';

const FaceDetect = ({onInputChange, onPictureSubmit, box, imageUrl, faceFetch, timeout, apiModelFail}) => {
	return (
		<div> 
            <ImageLinkForm onInputChange={onInputChange} onPictureSubmit={onPictureSubmit} />
            <FaceRecognition box={box} imageUrl={imageUrl} faceFetch={faceFetch} timeout={timeout} apiModelFail={apiModelFail} />
            <div className='ma5'>
            </div>
        </div>    
		);
}

export default FaceDetect;