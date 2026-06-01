import React, { useEffect } from "react";
import { PostsComponent } from "./PostsComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./duck/operations";
import { getToken } from "../../config/StorageFunctions";
import "./css/PostsContainer.css";

export default function PostsContainer() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer.posts);
  const error = useSelector((state) => state.postsReducer.error);
  const isLoading = useSelector((state) => state.postsReducer.isLoading);

  useEffect(() => {
    dispatch(fetchPosts(getToken()));
  }, []);

  return (
    <div id="posts-container">
      {isLoading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <span>Loading Posts...</span>
        </div>
      ) : (
        <PostsComponent posts={posts} error={error}></PostsComponent>
      )}
    </div>
  );
}
