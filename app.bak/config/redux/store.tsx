import { applyMiddleware, createStore, Middleware, Store } from "redux";
import { reducer } from "./reducers";
import { demographics } from "./datadesign";
import { createLogger } from "redux-logger";

const middleware: Middleware[] = [];
if (process.env.NODE_ENV === "development") {
    const logger = createLogger();
    middleware.push(logger);
}

export default function configureStore(): Store<demographics> {
    return createStore(reducer, applyMiddleware( ...middleware ));
}
