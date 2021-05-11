import { CANCEL_LOADING } from '../types';

export default (state, { type }) => {
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
