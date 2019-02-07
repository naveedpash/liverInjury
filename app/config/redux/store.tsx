import { createStore, applyMiddleware, Middleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { registerNewPatient } from "./sagas";
import { newpatient } from "./types";
import { reducer } from "./reducers";

function configureStore(initialState?: Array<newpatient>) {
    let middlwares: Middleware[] = [];

    const sagaMiddleware = createSagaMiddleware();
    middlwares.push(sagaMiddleware);

    if (process.env.NODE_ENV === "development") {
        middlwares.push(logger);
    }
    // state has been initialised in ./reducers
    return createStore(reducer, initialState!,
                      applyMiddleware(...middlwares));

    sagaMiddleware.run(registerNewPatient);
}

export default configureStore();
