import {
  GET_USERS_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  DELETE_USER,
} from "./constants";

export const fetchUsersRequest = (requestParams) => {
  return {
    type: GET_USERS_REQUEST,
    payload: requestParams,
  };
};
export const fetchUsersSuccess = (users) => {
  return { type: GET_USERS_SUCCESS, payload: users };
};
export const fetchUsersFail = (error) => {
  return {
    type: GET_USERS_FAIL,
    payload: error,
  };
};

export const deleteUserActions = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
