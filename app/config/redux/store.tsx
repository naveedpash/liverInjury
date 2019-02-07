import { createStore, applyMiddleware, Middleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { newpatient } from "./types";
import { reducer } from "./reducers";

function configureStore(initialState?: Array<newpatient>) {
    let middlwares: Middleware[] = [];

    if (process.env.NODE_ENV === "development") {
        middlwares.push(logger);
    }
    // state has been initialised in ./reducers
    return createStore(reducer, initialState!,
                      applyMiddleware(...middlwares));

}

export default configureStore();
