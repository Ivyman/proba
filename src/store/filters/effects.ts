import apiEndpoint, { URLS } from "@src/services/api";

// TODO change to type
export const fetchFilters = async (): Promise<any> => {
  return await apiEndpoint.get(URLS.filters);
};
