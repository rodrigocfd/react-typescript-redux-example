import React from 'react';

import useRedux from './useRedux';

function ViewName() {
	console.log('NAME');
	const [name] = useRedux('name');

	return (
		<div style={{color: 'blue'}}>Name: {name}</div>
	);
}

export default ViewName;
