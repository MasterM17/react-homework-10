import {
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  GET_USERS_REQUEST,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from "./constants";

const initalState = {
  users: [],
  error: undefined,
  //isloading: false
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        //isloagind:true
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        //isLoading: false
      };

    case GET_USERS_FAIL:
      return {
        ...state,
        error: action.payload,
        //isLoading:false
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
         users: state.users.filter((user) => user.id !== action.payload),
      };

    case DELETE_USER_REQUEST:
      return {
        ...state,
       
      };

    case DELETE_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
