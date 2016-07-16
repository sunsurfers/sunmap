import {GOTO} from '../constants'

export const goTo = (screen, params) => {
	return {
		type: GOTO,
		payload: {
			screen,
			params
		}
	}
};

