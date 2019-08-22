import apiEndpoint from "@src/services/api";
import { studios } from "@src/Config/Constants";
import { removeEmptyFields } from "@src/helpers";

export const fetchStudiosList = async (
  nextPageToken: string,
  limit: number = studios.fetchLimit,
) => {
  const params = removeEmptyFields({ limit, nextPageToken });
  return await apiEndpoint.get("", { params });
};

export const fetchFilteredStudiosList = async (
  nextPageToken: string,
  city: string,
  query: string,
  limit: number = studios.fetchLimit,
) => {
  const params = removeEmptyFields({ limit, query, city, nextPageToken });
  return await apiEndpoint.get("", { params });
};
