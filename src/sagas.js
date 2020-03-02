import { all } from "redux-saga/effects";
import authSagas from "./sideEffects/auth";
import todosSagas from "./sideEffects/todos";
import outSagas from "./sideEffects/out";
import albumsSagas from "./sideEffects/albums";
import photosSagas from "./sideEffects/photos";
import filterSagas from "./sideEffects/filter";

export default function generateSagas() {
  return function* rootSaga() {
    yield all([...authSagas, ...todosSagas, ...outSagas, ...albumsSagas, ...photosSagas, ...filterSagas]);
  };
}
