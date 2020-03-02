export const FETCH_ALBUMS = "app/FETCH_ALBUMS";
export const FETCH_ALBUMS_SUCCESS = "app/FETCH_ALBUMS_SUCCESS";
export const FETCH_ALBUMS_FAIL = "app/FETCH_ALBUMS_FAIL";
export const  FILTER_ALBUMS = "app/FILTER_ALBUMS";
export const FILTER_ALBUMS_SUCCESS ="app/FILTER_ALBUMS_SUCCESS";
export const FILTER_ALBUMS_FAIL = "app/FILTER_ALBUMS_FAIL";

export function albumsFetchAction() {
    return {
        type: FETCH_ALBUMS
    };
}

export function albumsFetchActionSuccess(data) {
    return {
        type: FETCH_ALBUMS_SUCCESS,
        data
    };
}

export function albumsFetchFailAction(error) {
    return {
        type: FETCH_ALBUMS_FAIL,
        error
    };
}

export function filterAlbumsAction(event) {
    return {
        type: FILTER_ALBUMS,
        event
    };
}
export function albumsFilterActionSuccess(data) {
    return {
        type: FILTER_ALBUMS_SUCCESS,
        data
    };
}

export function albumsFilterFailAction(error) {
    return {
        type: FILTER_ALBUMS_FAIL,
        error
    };
}