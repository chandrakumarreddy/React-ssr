import "babel-polyfill";
import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { renderRoutes } from "react-router-config";
import Routes from "./Routes";
import reducers from "../reducers";

const axiosInstance = axios.create({
	baseURL: "/api"
});

const composeEnhancers =
	typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		  })
		: compose;

const enhancer = composeEnhancers(
	applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

const store = createStore(reducers, window.INITIAL_STATE, enhancer);

hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<div>{renderRoutes(Routes)}</div>
		</BrowserRouter>
	</Provider>,
	document.querySelector("#root")
);
