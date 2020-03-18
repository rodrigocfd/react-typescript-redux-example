import React from 'react';

import {useRedux} from './Redux';

function TextBlue() {
	console.log('BLUE');
	const [name] = useRedux('name');

	return (
		<div style={{color: 'blue'}}>Name: {name}</div>
	);
}

export default TextBlue;
