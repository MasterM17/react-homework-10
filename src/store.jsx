import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { usersReducer } from "./components/users/duck/index";
import { authReducer } from "./components/auth/duck/index";

const reducer = {
  usersReducer: usersReducer,
  authReducer: authReducer,
};

const logger = createLogger();

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
