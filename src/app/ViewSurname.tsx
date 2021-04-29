import useRedux from './useRedux';

function ViewSurname() {
	console.log('SURNAME');
	const [person] = useRedux('person');

	return (
		<div style={{color: 'purple'}}>Name: {person.surname}</div>
	);
}

export default ViewSurname;
