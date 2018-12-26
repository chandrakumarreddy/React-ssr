import { USERS_LIST } from "../actions";
export default (state = [], action) => {
	switch (action.type) {
		case USERS_LIST:
			return action.payload;
		default:
			return state;
	}
};
