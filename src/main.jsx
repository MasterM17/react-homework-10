import React from "react";
import ReactDOM from "react-dom/client";
import { Users } from "./components/users";
import { App } from "./components/App.jsx";
import { Login } from "./components/auth/Login.jsx";
import { Posts } from "./components/posts/index.jsx";
import { AlbumsWithHooks } from "./components/AlbumsWithHooks/AlbumsWithHooks.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store.jsx";

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
          <Route path="/posts" element={<Posts></Posts>}></Route>
          <Route
            path="/albums"
            element={<AlbumsWithHooks></AlbumsWithHooks>}
          ></Route>
        </Route>
        <Route path="*" element={<Navigate to="/login"></Navigate>}></Route>
      </Routes>
    </Router>
  </Provider>,
);
