import axios from "axios";


export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

instance.interceptors.request.use(
  function (config) {
    // const userData = localStorage.getItem("user");

    // console.log(userData.token)

    // config.headers["Authorization"] = "Bearer " + userData.token;
    // config.headers["Access-Control-Allow-Origin"] = "*";
    // config.headers["Accept"] = "*/*";
    // config.headers["currency"] = "kwd";
    // config.headers["Accept"] = "application/json";


    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
)

