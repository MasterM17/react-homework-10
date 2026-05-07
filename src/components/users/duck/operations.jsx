import {
  fetchUsersFail,
  fetchUsersRequest,
  fetchUsersSuccess,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFail,
} from "./actions";
import { getUsers, deleteUsers } from "./../../../api/usersApi";
import axios from "axios";

export const fetchUsers = (requestParams) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest(requestParams));
    return getUsers(requestParams)
      .then((result) => {
        dispatch(fetchUsersSuccess(result));
        return result;
      })
      .catch((err) => {
        dispatch(fetchUsersFail(err));
        return err;
      });
  };
};

// export const deleteUser = (id) => {
//   return async (dispatch) => {
//     try {
//       await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

//       dispatch(deleteUserActions(id));
//     } catch (err) {
//       console.log("err message delete: ", err);
//     }
//   };
// };

export const removeUsers = (requestParams) => {
  return async (dispatch) => {
    try {
      const result = await deleteUsers(requestParams);

      dispatch(deleteUserSuccess(requestParams));

      return result;
    } catch (err) {
      dispatch(deleteUserFail(err));
    }
  };
};
