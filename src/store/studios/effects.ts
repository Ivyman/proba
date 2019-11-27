import apiEndpoint, { URLS } from "@src/services/api";
import { removeEmptyFields } from "@src/helpers/common";
import { Studios } from "@src/config/Constants";
import { IFiltersData } from "@src/types/filters";
import { IStudioResponse } from "@src/types/studio";

export const fetchStudios = async (
  filtersData?: IFiltersData,
  nextPageToken: string | null = null,
): Promise<{ data: IStudioResponse }> => {
  const params = removeEmptyFields({
    limit: Studios.fetchLimit,
    search: filtersData ? filtersData.search : "",
    city: filtersData ? filtersData.search : "",
    nextPageToken,
  });
  return await apiEndpoint.get(URLS.studios, { params });
};
