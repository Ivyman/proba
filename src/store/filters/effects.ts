import apiEndpoint, { URLS } from "@src/services/api";
import { IFilters } from "@src/types/filters";

export const fetchFilters = async (): Promise<IFilters> => {
  return await apiEndpoint.get(URLS.filters);
};
