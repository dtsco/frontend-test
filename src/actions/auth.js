export const AUTH_LOGIN = "app/AUTH_LOGIN";
export const AUTH_LOGIN_SUCCESS = "app/AUTH_LOGIN_SUCCESS";
export const AUTH_LOGIN_FAIL = "app/AUTH_LOGIN_FAIL";
export const LOGIN_AUTHENTICATE = "app/LOGIN_AUTHENTICATE";
export const AUTH_LOGIN_OUT = "app/AUTH_LOGIN_OUT"

export function authLoginAction(email) {
  return {
    type: AUTH_LOGIN,
    email
  };
}

export function authLoginOutAction() {
  return {
    type: AUTH_LOGIN_OUT,
  };
}

export function authLoginSuccessAction(data) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    data
  };
}

export function authLoginFailAction(error) {
  return {
    type: AUTH_LOGIN_FAIL,
    error
  };
}

export function loginAuthenticate(id, email) {
  localStorage.setItem('isLogin', JSON.stringify({saveSession:true, id, email}))
  return {
    type: LOGIN_AUTHENTICATE,
    id
  };
}