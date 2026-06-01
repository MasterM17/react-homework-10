import { api } from "./../config/properties";
import axios from "axios";

export const getUsers = async () => {
  try {
    const result = await fetch(`${api.root}/users`);
    const json = await result.json();
    return await Promise.resolve(json);
  } catch (err) {
    return await Promise.reject(err);
  }
};

// export const deleteUsers = async (id) => {
//   try {
//     const result = await fetch(`${api.root}/users/${id}`, { method: "DELETE" });
//     const json = await result.json();
//     return await Promise.resolve(json);
//   } catch (err) {
//     return await Promise.reject(err);
//   }
// };

export const deleteUsers = async (id) => {
  try {
    const result = await axios({
      url: `${api.root}/users/${id}`,
      method: "DELETE",
    });
  } catch (err) {
    throw err;
    console.log(err);
  }
};
