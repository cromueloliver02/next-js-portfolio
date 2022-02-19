import { CANCEL_LOADING } from '../types';

const reducer = (state, { type }) => {
	switch (type) {
		case CANCEL_LOADING:
			return {
				...state,
				loading: false
			};
		default:
			return state;
	}
};

export default reducer;
