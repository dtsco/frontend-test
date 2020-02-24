import { all } from "redux-saga/effects";
import authSagas from "./sideEffects/auth";
import todosSagas from "./sideEffects/todos";

export default function generateSagas() {
  return function* rootSaga() {
    yield all([...authSagas, ...todosSagas]);
  };
}
