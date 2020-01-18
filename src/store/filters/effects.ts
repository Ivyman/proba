import apiEndpoint, { URLS } from "@src/utils/api";
import { IFilters } from "@src/types/filters";

export const fetchFilters = async (): Promise<{ data: IFilters }> => {
    return await apiEndpoint.get(URLS.filters);
};
