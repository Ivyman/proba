import apiEndpoint from "@utils/api";
import { API } from "@config/constants";
import { removeEmptyFields } from "@utils/common";
import { IFiltersParams } from "@typing/filters";
import { IUnitResponse } from "@typing/unit";

export const fetchUnits = async (
    city: string,
): Promise<{ data: IUnitResponse }> => {
    const params: IFiltersParams = removeEmptyFields<IFiltersParams>({
        city: city || null,
    });
    return await apiEndpoint.get(API.URLS.UNITS, { params });
};
