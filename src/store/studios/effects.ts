import apiEndpoint from "@utils/api";
import { API } from "@config/constants";
import { removeEmptyFields } from "@utils/common";
import { IFiltersParams } from "@typing/filters";
import { IStudioResponse } from "@typing/studio";

export const fetchStudios = async (
    city: string,
): Promise<{ data: IStudioResponse }> => {
    const params: IFiltersParams = removeEmptyFields<IFiltersParams>({
        city: city || null,
    });
    return await apiEndpoint.get(API.URLS.STUDIOS, { params });
};
