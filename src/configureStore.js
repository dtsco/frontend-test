import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import createReducer from "./reducers";
import generateSagas from "./sagas";

export default function configureStore(initialState = {}, history) {
  let composeEnhancers = compose;

  if (process.env.NODE_ENV !== "production" && typeof window === "object") {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers)
  );

  sagaMiddleware.run(generateSagas());

  return store;
}
