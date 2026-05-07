import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../config/StorageFunctions";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ redirectPath = "/login", children }) => {
  const reduxToken = useSelector((state) => state.authReducer.token);

  const token = reduxToken || getToken();

  if (!token) {
    return <Navigate to={redirectPath}></Navigate>;
  }
  return children ? children : <Outlet></Outlet>;
};
