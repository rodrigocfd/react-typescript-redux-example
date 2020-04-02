import React from 'react';

import useRedux from './useRedux';

function ViewCity() {
	console.log('CITY');
	const [city] = useRedux('city');

	return (
		<div style={{color: 'red'}}>City: {city}</div>
	);
}

export default ViewCity;
