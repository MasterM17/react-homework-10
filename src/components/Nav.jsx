import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOUt } from "./auth/duck/operations";

export const Nav = () => {
  const dispatch = useDispatch();
  return (
    <ul id="nav">
      <h3>Welcome {localStorage.getItem("user")}</h3>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/users"}>Users</Link>
      </li>
      <li>
        <Link to={"/posts"}>Posts</Link>
      </li>
      <li><Link to={"/albums"}>Albums</Link></li>
      <li>
        <button onClick={() => dispatch(logOUt())}>Log Out</button>
      </li>
    </ul>
  );
};
