import apiEndpoint, { URLS } from "@src/services/api";
import { ICityFilter } from "@src/types/filters";

export const fetchFilters = async (): Promise<ICityFilter[]> => {
  return await apiEndpoint.get(URLS.filters);
};
