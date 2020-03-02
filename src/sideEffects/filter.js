import {call, put, takeEvery} from "redux-saga/effects";
import request from "../utils/request";
import {
    FILTER_ALBUMS,
    albumsFilterActionSuccess,
    albumsFilterFailAction
} from "../actions/albums";

export function* albumsFilterSideEffect(action) {
    let value = action.event.target.value;
    try {
        const data = yield call(
            request,
            `https://jsonplaceholder.typicode.com/albums`
        );
        const filteredItem = yield data.filter((item) => {
            return item.title.toLowerCase().search(value.replace(/[/\\/^'[']/g, '').trim().toLowerCase()) !== -1;
        });
        yield put(albumsFilterActionSuccess(filteredItem));
    } catch (e) {
        yield  put(albumsFilterFailAction(e))
    }
}

export default [takeEvery(FILTER_ALBUMS, albumsFilterSideEffect)];