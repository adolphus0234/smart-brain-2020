import React from 'react'; 

const ColorImage = ({ imageUrl }) => {
	return (
			<div>
				<div className='center ma'>
					<div className='absolute mt2'>
						<div id='color-list' className='f3 pa2' ></div> 
						<img id='inputimage' 
							alt='' 
							src={imageUrl} 
							width='500px' 
							height='auto'
							style={{marginBottom: '15px'}}
							/>
					</div>
				</div>
			</div>
		)
}



export default ColorImage;