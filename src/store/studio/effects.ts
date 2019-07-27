import apiEndpoint from "@src/services/api";

export const fetchStudiosList = async (
  nextPageToken: string,
  limit: number = 10,
) => await apiEndpoint.get("", { params: { limit, nextPageToken } });

export const fetchFilteredStudiosList = async (
  nextPageToken: string,
  city: string,
  query: string,
  limit: number = 10,
) =>
  await apiEndpoint.get("", { params: { limit, query, city, nextPageToken } });
