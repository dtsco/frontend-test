import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "./history";

import authReducer from "./reducers/auth";
import todosReducer from "./reducers/todos";

export default function createReducer() {
  const rootReducer = combineReducers({
    auth: authReducer,
    todos: todosReducer,
    router: connectRouter(history)
  });

  return rootReducer;
}
