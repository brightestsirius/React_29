import axios from "axios";
const API = `https://679254a7cf994cc68049a5c4.mockapi.io/todos`;

const service = {
  get: (id) => axios.get(API + (id ? `/${id}` : ``)).then(({ data }) => data),
  delete: (id) => axios.delete(`${API}/${id}`).then(({ data }) => data),
  put: (id, item) =>
    axios.put(`${API}/${id}`, item).then(({ data }) => data),
  post: (item) => axios.post(API, item).then(({ data }) => data),
};

export default service;
