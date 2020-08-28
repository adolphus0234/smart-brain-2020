import React from 'react'; 
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn === true) {
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p onClick={() => onRouteChange('signout')} className='link dim black underline pa3 pointer nav'>Sign Out</p>
				</nav>
				)
		} else {
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p onClick={() => onRouteChange('signin')} className='link dim black underline pointer nav'>Sign In</p>
					<p onClick={() => onRouteChange('register')} className='link dim black underline pointer nav'>Register</p>
				</nav>
				)
		}
			
}



export default Navigation;