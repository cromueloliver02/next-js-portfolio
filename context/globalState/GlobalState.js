import { useReducer } from 'react';
import GlobalContext from './globalContext';
import globalReducer from './globalReducer';
import { CANCEL_LOADING } from '../types';

const globalState = ({ children }) => {
	const initialState = {
		loading: true
	};

	const [state, dispatch] = useReducer(globalReducer, initialState);

	const cancelLoading = () => dispatch({ type: CANCEL_LOADING });

	return (
		<GlobalContext.Provider value={{ loading: state.loading, cancelLoading }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default globalState;
