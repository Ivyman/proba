import axios from "axios";
import { API } from "@config/constants";

export default axios.create({
    baseURL: API.BASE_URL,
});
