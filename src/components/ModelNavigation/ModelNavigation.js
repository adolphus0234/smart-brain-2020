import React from 'react'; 
import './ModelNavigation.css';

const ModelNavigation = ({ onRouteChange, route }) => {
	
	
			return (
					 route === 'home3'
				? 	<div>
						<nav style={{display: 'flex', justifyContent: 'center'}}>
							<p onClick={() => onRouteChange('home')} className='F3 link dim black underline pa2 pointer'>FACE Detect</p>
							<p className='F2 pa2 ma2 white'>[FOOD Detect]</p>							
							<p onClick={() => onRouteChange('home2')} className='F3 link dim black underline pa2 pointer'>COLOR Detect</p>
						</nav>
					</div>
				:		 (route === 'home2'
					? 	<div>
							<nav style={{display: 'flex', justifyContent: 'center'}}>
								<p onClick={() => onRouteChange('home')} className='F3 link dim black underline pa2 pointer'>FACE Detect</p>
								<p className='F2 pa2 ma2 white'>[COLOR Detect]</p>						
								<p onClick={() => onRouteChange('home3')} className='F3 link dim black underline pa2 pointer'>FOOD Detect</p>
							</nav>
						</div>
					: 	<div>
							<div>
								<nav style={{display: 'flex', justifyContent: 'center'}}>
									<p onClick={() => onRouteChange('home2')} className='F3 link dim black underline pa2 pointer'>COLOR Detect</p>
									<p className='F2 pa2 ma2 white'>[FACE Detect]</p>									
									<p onClick={() => onRouteChange('home3')} className='F3 link dim black underline pa2 pointer'>FOOD Detect</p>
								</nav>
							</div>
						</div>
				))
		
}



export default ModelNavigation;