import { api } from "./../config/properties";
import axios from "axios";
import { getToken } from "../config/StorageFunctions";

export const getPosts = async (token) => {
  const header = {
    "Accept": "application/json,*/*",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  try {
    const respons = await axios.get(`${api.localRoute}/posts`, {
      headers: header,
    });
    console.log("getPosts res", respons);
    return respons;
  } catch (error) {
    console.log("Api error", error);
  }
};
