import {
  GET_USERS_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  DELETE_USER,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
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

// export const deleteUserActions = (id) => {
//   return {
//     type: DELETE_USER,
//     payload: id,
//   };
// };

export const deleteUserRequest = (requestParams) => {
  return {
    type: DELETE_USER_REQUEST,
    payload: requestParams,
  };
};

export const deleteUserSuccess = (userId) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: userId,
  };
};

export const deleteUserFail = (error) => {
  return {
    type: DELETE_USER_FAIL,
    payload: error,
  };
};
