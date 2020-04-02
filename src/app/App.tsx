import React from 'react';

import {createReduxStore, ReduxProvider} from './useRedux';
import Inputs from './Inputs';
import ViewName from './ViewName';
import ViewCity from './ViewCity';

function App() {
	return (
		<ReduxProvider store={createReduxStore()}>
			<Inputs />
			<ViewName />
			<ViewCity />
		</ReduxProvider>
	);
}

export default App;
