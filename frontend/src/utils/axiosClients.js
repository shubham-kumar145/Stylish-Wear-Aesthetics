import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://stylish-wear-aesthetics-backend.onrender.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;

