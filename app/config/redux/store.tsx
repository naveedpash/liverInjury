import { createStore, combineReducers, applyMiddleware, Middleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { newpatient } from "./types";
import { submission } from "./submissionState/types";
import { reducer } from "./reducers";
import { reducer as stateReducer } from "./submissionState/reducers";

export const rootReducer = combineReducers({
    data: reducer,
    state: stateReducer,
})

function configureStore(initialState?: {data: Array<newpatient>, state: Array<submission>}) {
    let middlwares: Middleware[] = [];

    if (process.env.NODE_ENV === "development") {
        middlwares.push(logger);
    }
    // state has been initialised in ./reducers and ./submissionState/reducers
    return createStore(rootReducer, initialState!,
                      applyMiddleware(...middlwares));

}

export default configureStore();
