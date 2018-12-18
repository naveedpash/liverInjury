import * as React from "react";
import { createNavigationContainer } from "react-navigation";
import { Provider } from "react-redux";
import Navigation from "./config/routes";
import store from "./config/redux/store";

export default () => (
    <Provider store={store}>
        <Navigation />
    </Provider>
);
