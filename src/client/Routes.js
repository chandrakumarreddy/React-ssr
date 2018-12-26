import React from "react";
import HomePage from "./components/Pages/HomePage";
import UsersListPage from "./components/Pages/UsersListPage";
import NotFoundPage from "./components/Pages/NotFoundPage";
import App from "../client/components/App";
import AdminListPage from "./components/Pages/AdminListPage";

export default [
	{
		...App,
		routes: [
			{
				path: "/",
				...HomePage,
				exact: true
			},
			{
				path: "/users",
				...UsersListPage
			},
			{
				...AdminListPage,
				path: "/admins"
			},
			{
				...NotFoundPage
			}
		]
	}
];
