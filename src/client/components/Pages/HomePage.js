import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
	const head = function() {
		return (
			<Helmet>
				<title>React ssr</title>
				<meta property="og:title" content="React ssr" />
			</Helmet>
		);
	};
	return (
		<div className="center-align" style={{ marginTop: "200px" }}>
			{head()}
			<h3>Welcome</h3>
			<p>Check out these awesome features</p>
		</div>
	);
};
export default { component: Home };
