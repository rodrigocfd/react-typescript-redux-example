import useRedux from './useRedux';

function Inputs() {
	const [person, setPerson] = useRedux('person');
	const [city, setCity] = useRedux('city');

	return (<>
		<div>
			Name <input type="text" autoComplete="off" value={person.name}
				onChange={e => setPerson({name: e.target.value})} />
		</div>
		<div>
			Surname <input type="text" autoComplete="off" value={person.surname}
				onChange={e => setPerson({surname: e.target.value})} />
		</div>
		<div>
			City <input type="text" autoComplete="off" value={city}
				onChange={e => setCity(e.target.value)} />
		</div>
	</>);
}

export default Inputs;
