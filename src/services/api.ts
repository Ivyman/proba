import axios from "axios";

export const URLS = {
  studiosList: "studios",
}

export default axios.create({
  baseURL: "http://localhost:8086/",
});
