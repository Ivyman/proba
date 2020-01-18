import axios from "axios";

export const URLS = {
    studios: "studios",
    filters: "filters",
    message: "message",
};

export default axios.create({
    baseURL: "http://localhost:8086/",
});
