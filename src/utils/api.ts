import axios from "axios";
import { API } from "@src/config/constants";

export default axios.create({
    baseURL: API.BASE_URL_FIREBASE,
    // baseURL: API.BASE_URL_LOCAL,
});
