import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import studios from "./studios";
import app from "./app";
import filters from "./filters";
import message from "./message";

export const rootReducer = combineReducers({ studios, app, filters, message });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
