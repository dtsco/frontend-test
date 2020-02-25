import { call, put, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";
import request from "../utils/request";
import {
  AUTH_LOGIN,
  authLoginSuccessAction,
  authLoginFailAction
} from "../actions/auth";
import { albumFetchAction } from "../actions/albums";

export function* authSideEffect(action) {
  try {
    const { email } = action;
    const data = yield call(
      request,
      `http://localhost:3004/users?email=${email}`
    );
    if (data.length) {
      console.log(data);
      localStorage.setItem("login", data[0].email);
      yield put(authLoginSuccessAction(data[0]));
      if (action.direction === "albums") {
        yield put(push("/albums"));
        yield put(albumFetchAction());
      } else {
        yield put(push("/todo"));
      } // nu, ya daje capsom ne budu pisat. ya veryu v tebya, zavtrashniy ya
    } else {
      /* eslint-disable no-throw-literal */
      throw "User not found.";
    }
  } catch (e) {
    yield put(authLoginFailAction(e));
  }
}

export default [takeEvery(AUTH_LOGIN, authSideEffect)];
