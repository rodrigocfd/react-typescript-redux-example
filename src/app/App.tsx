import {createReduxStore, ReduxProvider} from './useRedux';
import Inputs from './Inputs';
import ViewName from './ViewName';
import ViewSurname from './ViewSurname';
import ViewCity from './ViewCity';

function App() {
	return (
		<ReduxProvider store={createReduxStore()}>
			<Inputs />
			<ViewName />
			<ViewSurname />
			<ViewCity />
		</ReduxProvider>
	);
}

export default App;
