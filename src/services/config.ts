import axios from "axios";

const config = {
  maxBodyLength: Infinity,

  baseURL: "http://localhost:8080/api/",
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "content-type",
    "Content-Type": "application/json",
  },
};

const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
  (request: any) => {
    const token = localStorage.getItem("token");

    if (token) request.headers["Authorization"] = `Bearer ${token}`;
    return request;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
