import apiEndpoint, { URLS } from "@src/utils/api";
import { removeEmptyFields } from "@src/utils/common";
import { Studios } from "@src/utils/constants";
import { IFiltersData } from "@src/types/filters";
import { IStudioResponse } from "@src/types/studio";

export const fetchStudios = async (
    filtersData: IFiltersData,
    nextPageToken?: string,
): Promise<{ data: IStudioResponse }> => {
    const params = removeEmptyFields({
        limit: Studios.fetchLimit,
        search: filtersData.search || "",
        city: filtersData.city || "",
        nextPageToken,
    });
    return await apiEndpoint.get(URLS.studios, { params });
};
