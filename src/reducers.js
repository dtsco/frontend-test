import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "./history";

import authReducer from "./reducers/auth";
import todosReducer from "./reducers/todos";
import albumsReducer from "./reducers/albums";

export default function createReducer() {
  const rootReducer = combineReducers({
    auth: authReducer,
    todos: todosReducer,
    albums: albumsReducer,
    router: connectRouter(history)
  });

  return rootReducer;
}
