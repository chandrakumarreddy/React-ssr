import { combineReducers } from "redux";
import users from "./usersReducer";
import auth from "./authReducer";
import admins from "./adminReducer";

export default combineReducers({
	users,
	admins,
	auth
});
