import React from 'react';

import {useRedux} from './Redux';

function Inputs() {
	const [name, setName] = useRedux('name');
	const [city, setCity] = useRedux('city');

	return (<>
		<div>
			Name <input type="text" autoComplete="off" value={name}
				onChange={e => setName(e.target.value)} />
		</div>
		<div>
			City <input type="text" autoComplete="off" value={city}
				onChange={e => setCity(e.target.value)} />
		</div>
	</>);
}

export default Inputs;
