import apiEndpoint, { URLS } from "@src/utils/api";
import { removeEmptyFields } from "@src/utils/common";
import { STUDIOS } from "@src/config/constants";
import { IFiltersData } from "@src/types/filters";
import { IStudioResponse } from "@src/types/studio";

export const fetchStudios = async (
    filtersData: IFiltersData,
    nextPageToken?: string,
): Promise<{ data: IStudioResponse }> => {
    const params = removeEmptyFields({
        limit: STUDIOS.FETCH_LIMIT,
        search: filtersData.search || null,
        city: filtersData.city || null,
        cityArea: filtersData.cityArea || null,
        priceFrom: filtersData.priceFrom || null,
        nextPageToken,
    });
    return await apiEndpoint.get(URLS.studios, { params });
};
