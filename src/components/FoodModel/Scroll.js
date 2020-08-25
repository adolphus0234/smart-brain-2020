import React from 'react';

const Scroll = (props) => {
  return (
  	<div className='bg-black-0'
  		 style={{ overflow: 'scroll', 
  		 		  border: '2px solid black', 
  		 		  borderRadius: '6px', 
  		 		  height: '270px',
  		 		  marginLeft: '5%',
  		 		  marginRight: '5%',
  		 		}}
  		 >
  	{props.children}
  	</div>
  	);
}


export default Scroll;