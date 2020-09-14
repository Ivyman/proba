import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import units from "./units";
import app from "./app";
import filters from "./filters";
import message from "./message";

export const rootReducer = combineReducers({ units, app, filters, message });

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
