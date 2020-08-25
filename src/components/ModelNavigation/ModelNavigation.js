import React from 'react'; 

const ModelNavigation = ({ onRouteChange, route }) => {
	
	
			return (
					 route === 'home3'
				? 	<div>
						<nav style={{display: 'flex', justifyContent: 'center'}}>
							<p onClick={() => onRouteChange('home')} className='f3 link dim black underline pa2 ml3 pointer'>FACE Detect</p>
							<p className='f2 pa2 ma2 white'>[FOOD Detect]</p>							
							<p onClick={() => onRouteChange('home2')} className='f3 link dim black underline pa2 pointer'>COLOR Detect</p>
						</nav>
					</div>
				:		 (route === 'home2'
					? 	<div>
							<nav style={{display: 'flex', justifyContent: 'center'}}>
								<p onClick={() => onRouteChange('home')} className='f3 link dim black underline pa2 pointer'>FACE Detect</p>
								<p className='f2 pa2 ma2 white'>[COLOR Detect]</p>						
								<p onClick={() => onRouteChange('home3')} className='f3 link dim black underline pa2 pointer'>FOOD Detect</p>
							</nav>
						</div>
					: 	<div>
							<div>
								<nav style={{display: 'flex', justifyContent: 'center'}}>
									<p onClick={() => onRouteChange('home2')} className='f3 link dim black underline pa2 pointer'>COLOR Detect</p>
									<p className='f2 pa2 ma2 white'>[FACE Detect]</p>									
									<p onClick={() => onRouteChange('home3')} className='f3 link dim black underline pa2 pointer'>FOOD Detect</p>
								</nav>
							</div>
						</div>
				))
		
}



export default ModelNavigation;