import axios from "axios";
import * as BASE_URL from "../config";

const service = {
  post: (endPoint, data, header) => {
    return axios.post(`${BASE_URL}${endPoint}`, data, header);
  },
  get: (endPoint, header) => {
    return axios.get(`${BASE_URL}${endPoint}`, header);
  },
  put: (endPoint, data, header) => {
    return axios.put(`${BASE_URL}${endPoint}`, data, header);
  },
};

export default service;