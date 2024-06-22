import axios from "axios";

export const fetchTableAPI = async () => {
  const request = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return request.data;
};
