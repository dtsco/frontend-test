import {
  TODO_FETCH,
  TODO_FETCH_FAIL,
  TODO_FETCH_SUCCESS
} from "../actions/todos";

const initialState = {
  loading: false,
  data: {},
  error: null
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case TODO_FETCH:
      return {
        ...state,
        loading: true
      };
    case TODO_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    case TODO_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
