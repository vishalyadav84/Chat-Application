import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
  baseURL: import.meta.env.MODE === "development" ? "https://chat-application-1-nf7x.onrender.com/" : "/api",
  withCredentials: true,
});




