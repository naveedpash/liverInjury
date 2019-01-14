import { createStore, applyMiddleware, Middleware } from "redux";
import logger from "redux-logger";
import { reducer } from "./reducers";

function configureStore(initialState?: object) {
    // state has been initialised in ./reducers
    let middlwares: Middleware[] = [];
    if (process.env.NODE_ENV === "development") {
        middlwares.push(logger);
    }
    return createStore(reducer, initialState!,
                      applyMiddleware(...middlwares));
}

export default configureStore();
