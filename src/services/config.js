// import axios from "axios";

// const api = axios.create({ baseURL: "http://localhost:6500" });

// api.interceptors.request.use(
//   (request) => {

//     return request;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// export default api;

import axios from "axios";

const api = axios.create({
baseURL: "/api/proxy",
});

export default api;
