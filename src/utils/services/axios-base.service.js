import axios from "axios";
import { API_URL } from "../../config/environment";

let headers = {
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL: API_URL,
  headers: headers,
});

instance.all = axios.all;
instance.spread = axios.spread;

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error.response;
  }
);

export default instance;
