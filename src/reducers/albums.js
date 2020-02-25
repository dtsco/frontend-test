import {
  ALBUM_FETCH,
  ALBUM_FETCH_FAIL,
  ALBUM_FETCH_SUCCESS,
  FILTER,
  SETALBUMPHOTOS,
  ALBUMPHOTOSERROR
} from "../actions/albums";

const initialState = {
  loading: false,
  data: {},
  currentAlbum: {},
  error: null,
  fitred: null
};

export default function albumsReducer(state = initialState, action) {
  switch (action.type) {
    case ALBUM_FETCH:
      return {
        ...state,
        loading: true
      };
    case ALBUM_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    case ALBUM_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case SETALBUMPHOTOS:
      return {
        ...state,
        currentAlbum: action.data
      };
    case ALBUMPHOTOSERROR:
      return {
        ...state,
        error: action.error
      };
    case FILTER:
      if (state.fitred === "decrement") {
        return {
          ...state,
          data: [...state.data].sort((a, b) =>
            a.title[0] === b.title[0] ? 0 : a.title[0] > b.title[0] ? 1 : -1
          ),
          fitred: "increment"
        };
      } else if (state.fitred === "increment") {
        return {
          ...state,
          data: [...state.data].sort((a, b) =>
            a.title[0] === b.title[0] ? 0 : a.title[0] > b.title[0] ? -1 : 1
          ),
          fitred: "decrement"
        };
      } else {
        return {
          ...state,
          data: [...state.data].sort((a, b) =>
            a.title[0] === b.title[0] ? 0 : a.title[0] > b.title[0] ? 1 : -1
          ),
          fitred: "increment"
        };
      }
    default:
      return state;
  }
}
