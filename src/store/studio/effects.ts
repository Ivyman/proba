import apiEndpoint, { URLS } from "@src/services/api";
import { Studios } from "@src/config/Constants";
import { removeEmptyFields } from "@src/helpers/common";
import { IFiltersData } from "@src/types/studio";

export const fetchStudiosList = async (
  nextPageToken?: string,
  filtersData?: IFiltersData,
) => {
  const params = removeEmptyFields({
    limit: Studios.fetchLimit,
    query: filtersData && filtersData.query,
    city: filtersData && filtersData.city.join(","),
    nextPageToken,
  });
  return await apiEndpoint.get(URLS.studiosList, { params });
};
