import apiEndpoint from "@src/utils/api";
import { API } from "@src/config/constants";
import { removeEmptyFields } from "@src/utils/common";
import { IFiltersData, IFiltersParams } from "@src/types/filters";
import { IStudioResponse } from "@src/types/studio";

export const fetchStudios = async (
    filtersData: IFiltersData,
): Promise<{ data: IStudioResponse }> => {
    const params: IFiltersParams = removeEmptyFields<IFiltersParams>({
        city: filtersData.city || null,
    });
    return await apiEndpoint.get(API.URLS.STUDIOS, { params });
};
