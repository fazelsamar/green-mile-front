import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_URL_API;

const exportedObject = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default exportedObject;
