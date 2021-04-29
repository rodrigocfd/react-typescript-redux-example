import useRedux from './useRedux';

function ViewCity() {
	const [city] = useRedux('city');

	return (
		<div style={{color: 'blue'}}>Name: {city}</div>
	);
}

export default ViewCity;
