import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAIL,
  LOGIN_AUTHENTICATE,
  AUTH_LOGIN_OUT
} from "../actions/auth";

const getSaveLocalAuth = () => {
  if (localStorage.getItem('isLogin') === null) {
    return false
  }
  else {
    return JSON.parse(localStorage.getItem('isLogin')).saveSession
  }
};

const initialState = {
  loading: false,
  data: {},
  error: null,
  isAuthenticated: getSaveLocalAuth(),
  userId: null,
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
    case LOGIN_AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: getSaveLocalAuth(),
        userId: action.data,
      };
    case AUTH_LOGIN_OUT:
      return {
        ...state,
        isAuthenticated: false,
        data: {}
      };
    default:
      return state;
  }
}