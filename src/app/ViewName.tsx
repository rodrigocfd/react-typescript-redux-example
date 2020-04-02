import React from 'react';

import useRedux from './useRedux';

function ViewName() {
	console.log('NAME');
	const [person] = useRedux('person');

	return (
		<div style={{color: 'blue'}}>Name: {person.name}</div>
	);
}

export default ViewName;
