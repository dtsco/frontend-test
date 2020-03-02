export const FETCH_PHOTOS_ACTION = "app/FETCH_PHOTOS_ACTION";
export const FETCH_PHOTOS_ACTION_SUCCESS = "app/FETCH_PHOTOS_ACTION_SUCCESS";
export  const  FETCH_PHOTOS_ACTION_FAIL = "app/FETCH_PHOTOS_ACTION_FAIL"

export function fetchPhotosAction(id) {
    return {
        type: FETCH_PHOTOS_ACTION,
        id
    };
}

export function photosFetchActionSuccess(data) {
    return {
        type: FETCH_PHOTOS_ACTION_SUCCESS,
        data
    };
}

export function photosFetchFailAction(error) {
    return {
        type: FETCH_PHOTOS_ACTION_FAIL,
        error
    };
}