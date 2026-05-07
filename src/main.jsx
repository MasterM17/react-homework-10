import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Users } from "./components/users";
import { Provider } from "react-redux";
import store from "./store.jsx";
import { Login } from "./components/auth/Login.jsx";
import { PrivateRoute } from "./utils/PrivateRoute.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/login" index element={<Login></Login>}></Route>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <App />
            </PrivateRoute>
          }
        >
          <Route path="/users" element={<Users />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/login"></Navigate>}></Route>
      </Routes>
    </Router>
  </Provider>,
);
