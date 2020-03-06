import apiEndpoint from "@src/utils/api";
import { API } from "@src/config/constants";
import { removeEmptyFields } from "@src/utils/common";
import { STUDIOS } from "@src/config/constants";
import { IFiltersData, IFiltersParams } from "@src/types/filters";
import { IStudioResponse } from "@src/types/studio";

export const fetchStudios = async (
    filtersData: IFiltersData,
    nextPageToken?: string,
): Promise<{ data: IStudioResponse }> => {
    const params: IFiltersParams = removeEmptyFields<IFiltersParams>({
        limit: STUDIOS.FETCH_LIMIT,
        searchQuery: filtersData.searchQuery || null,
        city: filtersData.city || null,
        cityArea: filtersData.cityArea || null,
        priceFrom: filtersData.priceFrom || null,
        nextPageToken,
    });
    return await apiEndpoint.get(API.URLS.STUDIOS, { params });
};
