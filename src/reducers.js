import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "./history";

import authReducer from "./reducers/auth";
import todosReducer from "./reducers/todos";
import albumsReducer from "./reducers/albums";
import modalReducer from "./reducers/modal";
import photosReducer from "./reducers/photos";

export default function createReducer() {
  const rootReducer = combineReducers({
    auth: authReducer,
    todos: todosReducer,
    albums: albumsReducer,
    photos: photosReducer,
    modal: modalReducer,
    router: connectRouter(history)
  });

  return rootReducer;
}
