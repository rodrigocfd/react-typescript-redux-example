import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';

/**
 * Initial state to be kept into Redux store, which will infer the type.
 */
const initialState = {
	person: {
		name: '', // when nested, name or surname changes will trigger all person subscribers
		surname: ''
	},
	city: '',
};

type StateT = typeof initialState;
type ActionTypeT = keyof StateT;
type ActionT<K extends ActionTypeT> = { type: K, payload: typeof initialState[K] };

function reducer<K extends ActionTypeT>(state = initialState, action: ActionT<K>): StateT {
	return (state[action.type] !== undefined)
		? { ...state, [action.type]: action.payload }
		: state;
}

/**
 * Creates the Redux store with our reducer function.
 * @returns The Redux store object.
 */
function createReduxStore() {
	return Redux.createStore<StateT, any, unknown, unknown>(reducer);
}

/**
 * Redux provider component, which should wrap the root application component.
 */
const ReduxProvider = ReactRedux.Provider;

/**
 * Custom hook to access the Redux store.
 * @param key One of the top-level keys of the state object.
 * @returns Getter/setter pair to Redux store.
 */
function useRedux<AcT extends ActionTypeT>(key: AcT) {
	const value = ReactRedux.useSelector((state: StateT) => state[key]) as typeof initialState[AcT];
	const dispatch = ReactRedux.useDispatch();

	type KeyT = typeof initialState[AcT];
	type ValT<KeyT> = KeyT extends object ? Partial<KeyT> : KeyT; // if value is an object, accept Partial

	function setValue(newVal: ValT<KeyT>) {
		if (typeof newVal === 'object') {
			dispatch({ type: key, payload: { ...(value as object), ...(newVal as object) } });
		} else {
			dispatch({ type: key, payload: newVal });
		}
	}

	return [value, setValue] as const;
}

export { createReduxStore, ReduxProvider }
export default useRedux;
