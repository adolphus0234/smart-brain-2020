import React from 'react';
import BoundingBox from './BoundBox'; 

const FaceModel = ({ box }) => {

	const boundBoxComponent = Object.entries(box).map((item, i) => {	
		return <BoundingBox key={i} clarifaiFace={box[i][1].region_info.bounding_box} />
	})
		return (
				<div>
					{boundBoxComponent}
				</div>
			);
}

export default FaceModel;