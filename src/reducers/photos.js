import {
    FETCH_PHOTOS_ACTION,
    FETCH_PHOTOS_ACTION_SUCCESS,
    FETCH_PHOTOS_ACTION_FAIL
} from "../actions/photos";

const initialState = {
    loading: false,
    data: {},
    error: null
};

export default function photosReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PHOTOS_ACTION:
            return {
                ...state,
                loading: true
            };
        case FETCH_PHOTOS_ACTION_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data
            };
        case FETCH_PHOTOS_ACTION_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}