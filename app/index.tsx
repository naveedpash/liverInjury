import * as React from "react";
import { Provider } from "react-redux";

import store from "./config/redux";
import Navigation from "./config/routes";

export default () => ( 
   <Provider store={store}>
       <Navigation /> 
   </Provider>
);
