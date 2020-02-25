import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAIL
} from "../actions/auth";
import { EXIT } from "../actions/logout";

const initialState = {
  loading: false,
  data: {},
  error: null
};

export default function autheducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        loading: true
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: null
      };
    case AUTH_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case EXIT:
      return {
        ...state,
        data: {}
      };
    default:
      return state;
  }
}
