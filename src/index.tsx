import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";
import store from "./store";

// tslint:disable-next-line
console.log("v1.0", process.env.NODE_ENV);

ReactDOM.render(
    <Provider store={store}>
        <CssBaseline />
        <App />
    </Provider>,
    document.getElementById("root"),
);
