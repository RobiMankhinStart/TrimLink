import axios from "axios";
import { getCookie } from "../utils/Services";

// 1. Creating the instance
const apiClient = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// 2. Requesting Interceptor
// Useful for injecting Auth tokens before the request leaves
apiClient.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token");
    const token = getCookie("acc_tok");
    console.log("acc_tok  : ", token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const authServices = {
  registration: async (data) => {
    const { name, email, password } = data;
    const res = await apiClient.post("/auth/register", {
      name,
      email,
      password,
    });
    return res.data;
  },
  login: async (data) => {
    const { email, password } = data;

    const res = await apiClient.post("/auth/login", { email, password });
    return res.data;
  },
  getProfile: async () => {
    const res = await apiClient.get("/auth/getprofile");
    return res.data;
  },
  logout: async () => {
    const res = await apiClient.post("/auth/logout");
    return res.data;
  },
};

const urlServices = {
  trimUrl: async (longUrl) => {
    try {
      const res = await apiClient.post("/url/create", { longUrl });
      return res.data;
    } catch (error) {
      // 1. Look for the message sent by your Express 'res.status(400).send({message: "..."})'
      const serverMessage =
        error.response?.data?.message || "An unexpected error occurred";

      // 2. Throw it so the Component's catch block can see it
      throw serverMessage;
    }
  },
  getUrls: async () => {
    const res = await apiClient.get("/url/geturls");
    return res.data;
  },
  deleteUrl: async (id) => {
    try {
      // This sends a request to http://localhost:8000/url/delete/ID_HERE
      const res = await apiClient.delete(`/url/delete/${id}`);
      return res.data;
    } catch (error) {
      const serverMessage =
        error.response?.data?.message || "Failed to delete URL";
      throw serverMessage;
    }
  },
};
export { urlServices, authServices };

// export default apiClient;

// 3. Response Interceptor
// Useful for handling global errors (like 401 Unauthorized) in one place
// apiClient.interceptors.response.use(
//   (response) => {
//     // Optionally return just the data to save a step in your components
//     return response.data;
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       console.warn('Unauthorized! Logging out...');
//       // Logic to clear local storage or redirect to login
//       localStorage.removeItem('token');
//       window.location.href = '/login';
//     }

//     return Promise.reject(error);
//   }
// );
