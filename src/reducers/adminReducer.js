import { ADMIN_LIST } from "../actions";
export default (state = [], action) => {
	switch (action.type) {
		case ADMIN_LIST:
			return action.payload;
		default:
			return state;
	}
};
