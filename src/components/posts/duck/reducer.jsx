import {
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
} from "./constants";

const initialState = {
  posts: [],
  error: undefined,
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };

    case GET_POSTS_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
