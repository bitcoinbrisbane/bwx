import axios from "axios";

const open = axios.create({
  //baseURL: process.env.REACT_APP_API_URL || "http://139.180.172.190",
  baseURL: "http://139.180.172.190",
  headers: {
    "Cache-Control": "no-store"
  }
});

const secure = axios.create({
  //baseURL: process.env.REACT_APP_API_URL || "http://139.180.172.190",
  baseURL: "http://139.180.172.190",
  headers: {
    "Cache-Control": "no-store"
  }
});

secure.interceptors.request.use(
  async config => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    const { token } = user;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default { open, secure };
