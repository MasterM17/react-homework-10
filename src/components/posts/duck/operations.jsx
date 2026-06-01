import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFail,
} from "./actions";

import { getPosts } from "../../../api/postsApi";

export const fetchPosts = (requestParams) => {
  return (dispatch) => {
    dispatch(fetchPostsRequest(requestParams));
    return getPosts(requestParams)
      .then((result) => {
        dispatch(fetchPostsSuccess(result.data));
        return result.data;
      })
      .catch((err) => {
        dispatch(fetchPostsFail(err.message));
        return err.message;
      });
  };
};
