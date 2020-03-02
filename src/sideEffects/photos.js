import {call, put, takeEvery} from "redux-saga/effects";
import request from "../utils/request";
import {
    FETCH_PHOTOS_ACTION,
    photosFetchActionSuccess,
    photosFetchFailAction
} from "../actions/photos";

export function* photosSideEffect(action) {
    try {
        const data = yield call(
            request,
            `https://jsonplaceholder.typicode.com/photos?albumId=${action.id}`
        );
        yield put(photosFetchActionSuccess(data));

    } catch (e) {
        yield  put(photosFetchFailAction(e))
    }
}

export default [takeEvery(FETCH_PHOTOS_ACTION, photosSideEffect)];