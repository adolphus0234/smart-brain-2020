import React from 'react'; 

const Rank = ({ name, entries }) => {
	return (
			<div>
				<div className="f4 white">
					{`${name}, your current number of entries is:`}
				</div>
				<div className="f1 white">
					{entries} 
				</div>
			</div>

		)
}



export default Rank;