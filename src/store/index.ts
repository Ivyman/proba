import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import studio from "./studio";
import app from "./app";
import filters from "./filters";

export const rootReducer = combineReducers({ studio, app, filters });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
