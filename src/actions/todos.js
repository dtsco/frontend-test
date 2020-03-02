export const TODO_FETCH = "app/TODO_FETCH";
export const TODO_FETCH_SUCCESS = "app/TODO_FETCH_SUCCESS";
export const TODO_FETCH_FAIL = "app/TODO_FETCH_FAIL";

export function todoFetchAction() {
  return {
    type: TODO_FETCH
  };
}

export function todoFetchSuccessAction(data) {
  return {
    type: TODO_FETCH_SUCCESS,
    data
  };
}

export function todoFetchFailAction(error) {
  return {
    type: TODO_FETCH_FAIL,
    error
  };
}