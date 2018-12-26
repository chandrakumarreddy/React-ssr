import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { fetchUsers } from "../../../actions";

class UsersListPage extends React.Component {
	componentDidMount() {
		this.props.fetchUsers();
	}
	renderUsers(users) {
		return users.map(item => <li key={item.id}>{item.name}</li>);
	}
	head() {
		return (
			<Helmet>
				<title>Users list</title>
				<meta property="og:title" content="users list" />
			</Helmet>
		);
	}
	render() {
		return (
			<div>
				{this.head()}
				<ul>{this.renderUsers(this.props.users)}</ul>}
			</div>
		);
	}
}

function loadData(store) {
	return store.dispatch(fetchUsers());
}

export default {
	component: connect(
		state => ({ users: state.users }),
		{ fetchUsers }
	)(UsersListPage),
	loadData
};
