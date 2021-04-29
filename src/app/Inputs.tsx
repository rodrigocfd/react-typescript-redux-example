import useRedux from './useRedux';

function Inputs() {
	const [city, setCity] = useRedux('city');
	const [street, setStreet] = useRedux('street');
	const [houseNo, setHouseNo] = useRedux('houseNo');

	return (<>
		<div>
			City <input type="text" autoComplete="off" value={city}
				onChange={e => setCity(e.target.value)} />
		</div>

		<div>
			Street <input type="text" autoComplete="off" value={street}
				onChange={e => setStreet(e.target.value)} />,
			no. <input type="number" autoComplete="off" min="0" value={houseNo}
				onChange={e => setHouseNo(parseInt(e.target.value) || 0)} />
		</div>
	</>);
}

export default Inputs;
