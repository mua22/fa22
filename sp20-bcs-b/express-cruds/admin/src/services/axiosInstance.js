import axios from "axios";
let axiosInstance = axios.create({
  baseURL: "http://localhost:2000",
  // withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
axiosInstance.defaults.headers.common["x-auth-token"] = localStorage.getItem(
  "token"
)
  ? localStorage.getItem("token").toString()
  : "";
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
// axiosInstance.interceptors.response.use(
//   response => successHandler(response),
//   error => errorHandler(error)
// );
const errorHandler = (error) => {
  return Promise.reject({ ...error });
};

const successHandler = (response) => {
  return response;
};
export default axiosInstance;
