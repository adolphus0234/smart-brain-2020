import React from 'react';
import './Rank.css'; 

const Rank = ({ name, entries }) => {
	return (
			<div>
				<div className="white name">
					{`${name}, your current number of entries is:`}
				</div>
				<div className="white entries">
					{entries} 
				</div>
			</div>

		)
}



export default Rank;