import apiEndpoint, { URLS } from "@src/services/api";

export const sendMessage = async () => {
  const params = {};
  return await apiEndpoint.get(URLS.message, { params });
};
