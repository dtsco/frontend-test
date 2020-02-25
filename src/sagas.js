import { all } from "redux-saga/effects";
import authSagas from "./sideEffects/auth";
import todosSagas from "./sideEffects/todos";
import logoutSagas from "./sideEffects/logout";
import albumsSagas from "./sideEffects/albums";
import photosSagas from "./sideEffects/albumPhotos";

export default function generateSagas() {
  return function* rootSaga() {
    yield all([
      ...authSagas,
      ...todosSagas,
      ...logoutSagas,
      ...albumsSagas,
      ...photosSagas
    ]);
  };
}
