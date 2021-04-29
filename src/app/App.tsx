import {createReduxStore, ReduxProvider} from './useRedux';
import Inputs from './Inputs';
import ViewCity from './ViewCity';
import ViewAddress from './ViewAddress';

function App() {
	return (
		<ReduxProvider store={createReduxStore()}>
			<h1>Redux Example</h1>
			<Inputs />
			<hr />
			<ViewCity />
			<ViewAddress />
		</ReduxProvider>
	);
}

export default App;
