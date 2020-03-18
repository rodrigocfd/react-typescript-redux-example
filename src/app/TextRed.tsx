import React from 'react';

import {useRedux} from './Redux';

function TextRed() {
	console.log('RED');
	const [city] = useRedux('city');

	return (
		<div style={{color: 'red'}}>City: {city}</div>
	);
}

export default TextRed;
