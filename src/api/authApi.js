import axios from 'axios';
import { api } from '../config/properties'
 
export const LogInUser = (requestParams) => {
    const header = {
        "Content-Type": "application/json",
        "Accept": "application/json,text/plain,*/*"
    }
 
    const data = { username: requestParams.username, password: requestParams.password };
 
    return axios.post(`${api.localRoute}/login`, { headers: header, body: data })
        .then(json => Promise.resolve(json))
        .catch(err => Promise.reject(err))
}