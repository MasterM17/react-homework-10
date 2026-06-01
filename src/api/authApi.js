import axios from "axios";
import { api } from "../config/properties";

export const LogInUser = (requestParams) => {
  const header = {
    "Content-Type": "application/json",
    "Accept": "application/json,text/plain,*/*",
  };

  const data = {
    username: requestParams.username,
    password: requestParams.password,
  };

  return axios
    .post(`${api.localRoute}/login`, { headers: header, body: data })
    .then((json) => Promise.resolve(json))
    .catch((err) => Promise.reject(err));
};


// export const LogInUser = async (requestParams) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json,text/plain,*/*",
//     },
//   };

//   const data = {
//     username: requestParams.username,
//     password: requestParams.password,
//   };

//   try {
//     const response = await axios.post(`${api.localRoute}/login`, data, config);
//     return response.data;
//   } catch (err) {
//     throw err;
//   }
// };

//* or

// export const LogInUser = async (requestParams) => {
//   const data = {
//     username: requestParams.username,
//     password: requestParams.password,
//   };

//   try {
//     const response = await axios({
//       method: "POST",
//       url: `${api.localRoute}/login`,
//       data,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json,text/plain,*/*",
//       },
//     });
//     return response.data;
//   } catch (err) {
//     throw err;
//   }
// };



