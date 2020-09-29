import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import {fetchCollectionsStart} from "./shop/shopSagas";

const saga = createSagaMiddleware()
const middlewares = [saga]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

saga.run(fetchCollectionsStart)