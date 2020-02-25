import { put, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";
import { logOut, LOGOUTRE } from "../actions/logout";

export function* logoutSideEffect() {
  yield localStorage.removeItem("login");
  yield put(push("/login"));
  yield put(logOut());
}
export default [takeEvery(LOGOUTRE, logoutSideEffect)];
