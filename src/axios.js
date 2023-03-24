import axios from "axios";

const baseURL = "http://localhost:8000/"

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    Authorization: localStorage.getItem("token")
      ? `Token ${localStorage.getItem("token")}`
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
    async function (error) {

      if (error && error.response && error.response.status === 401) {
        localStorage.clear();
        window.location.href = "/";
        return Promise.reject(error);
      }

      if (error && error.response && error.response.status === 400) {
        return Promise.reject(error);
      }

  }
);

export default axiosInstance;