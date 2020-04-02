import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';

// Initial state to be kept into Redux store.
const initialState = {
	person: {
		name: '', // when nested, name or surname changes will trigger all person subscribers
		surname: ''
	},
	city: ''
};

type StateT = typeof initialState;
type ActionTypeT = keyof StateT;
type ActionT<K extends ActionTypeT> = {type: K, payload: typeof initialState[K]};

// The reducer function.
function reducer<K extends ActionTypeT>(state = initialState, action: ActionT<K>): StateT {
	return (state[action.type] !== undefined)
		? {...state, [action.type]: action.payload}
		: state;
}

// Creates the Redux store, with our reducer function.
function createReduxStore() {
	return Redux.createStore<StateT, any, unknown, unknown>(reducer);
}

// Redux provider, should wrap the root application component.
const ReduxProvider = ReactRedux.Provider;

// Custom hook that returns a get/set pair to Redux store.
function useRedux<AcT extends ActionTypeT>(key: AcT) {
	const value = ReactRedux.useSelector((state: StateT) => state[key]) as typeof initialState[AcT];
	const dispatch = ReactRedux.useDispatch();

	function setValue(newVal: typeof initialState[AcT]) {
		dispatch({type: key, payload: newVal});
	}

	return [value, setValue] as const;
}

export {createReduxStore, ReduxProvider}
export default useRedux;
