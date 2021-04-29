import useRedux from './useRedux';

function ViewAddress() {
	const [street] = useRedux('street');
	const [houseNo] = useRedux('houseNo');

	return (
		<div style={{color: 'red'}}>Address: {street}, {houseNo}</div>
	);
}

export default ViewAddress;
