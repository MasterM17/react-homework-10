import { logInSuccess, logInFailed, logOutUser } from "./actions";
import { LogInUser } from "../../../api/authApi";

export const logIntoApp = (requestParams) => {
  return (dispatch) => {
    return LogInUser(requestParams)
      .then((res) => {
        console.log(res.data);

        dispatch(logInSuccess(res.data));
        return res.data;
      })
      .catch((err) => {
        console.log(err);

        dispatch(logInFailed("Invalid Credentials"));
        return err;
      });
  };
};

export const logOUt = () => {
  return (dispatch) => {
    dispatch(logOutUser());
  };
};
