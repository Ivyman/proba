import apiEndpoint from "@utils/api";
import { API } from "@config/constants";
import { IFilters } from "@typing/filters";

export const fetchFilters = async (): Promise<{ data: IFilters }> => {
    return await apiEndpoint.get(API.URLS.FILTERS);
};
