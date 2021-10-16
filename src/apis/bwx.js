import axios from "axios";

const open = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://127.0.0.1:5000/",
  headers: {
    "Cache-Control": "no-store"
  }
});

const secure = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://127.0.0.1:5000/",
  headers: {
    "Cache-Control": "no-store"
  }
});

export default { open, secure };
