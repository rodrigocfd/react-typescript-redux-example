import React from 'react';

import {ReduxProvider} from './Redux';
import Inputs from './Inputs';
import TextBlue from './TextBlue';
import TextRed from './TextRed';

function App() {
	return (
		<ReduxProvider>
			<Inputs />
			<TextBlue />
			<TextRed />
		</ReduxProvider>
	);
}

export default App;
