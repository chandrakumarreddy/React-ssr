export const CURRENT_USER = "CURRENTUSER";
export const USERS_LIST = "USERSLIST";
export const ADMIN_LIST = "ADMINLIST";

export const fetchUsers = () => async (dispatch, getState, api) => {
	const res = await api.get("/users");
	dispatch({
		type: USERS_LIST,
		payload: res.data
	});
};

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
	const res = await api.get("/current_user");
	dispatch({
		type: CURRENT_USER,
		payload: res.data
	});
};

export const fetchAdmins = () => async (dispatch, getState, api) => {
	const res = await api.get("/admins");
	dispatch({
		type: ADMIN_LIST,
		payload: res.data
	});
};
