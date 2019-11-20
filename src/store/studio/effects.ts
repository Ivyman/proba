import apiEndpoint, { URLS } from "@src/services/api";
import { Studios } from "@src/config/Constants";
import { IFiltersData } from "@src/types/filters";
import { IStudioResponse } from "@src/types/studio";

export const fetchStudios = async (
  nextPageToken?: string | null,
  filtersData?: IFiltersData,
): Promise<{ data: IStudioResponse }> => {
  const params = {
    limit: Studios.fetchLimit,
    query: filtersData ? filtersData.query : "",
    city: filtersData ? (filtersData.city as string[]).join(",") : "",
    nextPageToken,
  };
  return await apiEndpoint.get(URLS.studios, { params });
};
