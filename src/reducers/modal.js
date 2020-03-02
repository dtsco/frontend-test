import {
    OPEN_MODAL,
    CLOSE_MODAL
} from "../actions/modal";

const initialState = {
    show: false,
};

export default function photosReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                show: true
            };
        case CLOSE_MODAL:
            return {
                ...state,
                show: false
            };
        default:
            return state;
    }
}