import axios from 'axios';

// const TIMEOUT = 1 * 60 * 1000;
// axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = "http://localhost:3003" // process.env.REACT_APP_ENV === "dev" ? process.env.REACT_APP_API_LOCAL_BASE_URL : process.env.REACT_APP_API_PROD_BASE_URL

const setupAxiosInterceptors = () => {
  const onRequestSuccess = (config: any) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  };

  axios.interceptors.request.use(onRequestSuccess);
};

export default setupAxiosInterceptors;
