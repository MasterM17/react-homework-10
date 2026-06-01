import {
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
} from "./constants";

export const fetchPostsRequest = (requestParams) => {
  return {
    type: GET_POSTS_REQUEST,
    payload: requestParams,
  };
};

export const fetchPostsSuccess = (posts) => {
  return { type: GET_POSTS_SUCCESS, payload: posts };
};

export const fetchPostsFail = (error) => {
  return {
    type: GET_POSTS_FAIL,
    payload: error,
  };
};
