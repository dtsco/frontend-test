import {call, takeEvery, put} from "redux-saga/effects";
import {push} from "connected-react-router";
import {
    AUTH_LOGIN_OUT,
} from "../actions/auth";

export function* authOutSideEffect() {
    const clearStore = () => localStorage.clear()
    yield call(clearStore)
    yield put(push('/login'))
}

export default [takeEvery(AUTH_LOGIN_OUT, authOutSideEffect)];