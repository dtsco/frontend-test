import {call, put, takeEvery} from "redux-saga/effects";
import request from "../utils/request";
import {
    FETCH_ALBUMS,
    albumsFetchActionSuccess,
    albumsFetchFailAction
} from "../actions/albums";

export function* albumsSideEffect() {
    try {
        const data = yield call(
            request,
            `https://jsonplaceholder.typicode.com/albums`
        );
        yield put(albumsFetchActionSuccess(data));
    } catch (e) {
        yield  put(albumsFetchFailAction(e))
    }
}

export default [takeEvery(FETCH_ALBUMS, albumsSideEffect)];