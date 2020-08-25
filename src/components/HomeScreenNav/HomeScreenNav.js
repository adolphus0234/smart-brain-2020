import React from 'react';
import ModelNavigation from '../ModelNavigation/ModelNavigation';
import Logo from '../Logo/Logo';
import Rank from '../Rank/Rank';

const HomeScreenNav = ({name, entries, route, onRouteChange}) => {
	return (
		<div>
			<Logo /> 
            <Rank name={name} entries={entries} />
            <ModelNavigation route={route} onRouteChange={onRouteChange} />
		</div>
		);
}

export default HomeScreenNav;