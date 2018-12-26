import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { fetchAdmins } from "../../../actions";
import RequireAuth from "../hoc/requireAuth";

class AdminList extends React.Component {
	componentDidMount() {
		this.props.fetchAdmins();
	}
	renderAdmins(admins) {
		return admins.map(item => <li key={item.id}>{item.name}</li>);
	}
	head() {
		return (
			<Helmet>
				<title>Admin list</title>
				<meta property="og:title" content="admin list" />
			</Helmet>
		);
	}
	render() {
		return (
			<div>
				{this.head()}
				admins list <ul>{this.renderAdmins(this.props.admins)}</ul>}
			</div>
		);
	}
}

export default {
	component: connect(
		state => ({ admins: state.admins }),
		{ fetchAdmins }
	)(RequireAuth(AdminList)),
	loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
