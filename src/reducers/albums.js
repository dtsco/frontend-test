import {
    FETCH_ALBUMS,
    FETCH_ALBUMS_SUCCESS,
    FETCH_ALBUMS_FAIL,
    FILTER_ALBUMS,
    FILTER_ALBUMS_SUCCESS, FILTER_ALBUMS_FAIL
} from "../actions/albums";

const initialState = {
    loading: false,
    data: {},
    error: null
};

export default function albumsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALBUMS:
            return {
                ...state,
                loading: true
            };
        case FETCH_ALBUMS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data
            };
        case FETCH_ALBUMS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case FILTER_ALBUMS:
            return {
                ...state,
                loading: true
            };
        case FILTER_ALBUMS_SUCCESS:
            return {
                ...state,
                data:action.data,
                loading: false
            };
        case FILTER_ALBUMS_FAIL:
            return {
                ...state,
                error:action.error
            };
        default:
            return state;
    }
}