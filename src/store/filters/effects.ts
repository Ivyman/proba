import apiEndpoint from "@src/utils/api";
import { API } from "@src/config/constants";
import { IFilters } from "@src/types/filters";

export const fetchFilters = async (): Promise<{ data: IFilters }> => {
    return await apiEndpoint.get(API.URLS.FILTERS);
};
