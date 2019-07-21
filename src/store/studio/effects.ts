import apiEndpoint from "@src/services/api";

export const fetchStudiosList = async (limit: number, nextPageToken: string) =>
  await apiEndpoint.get(nextPageToken ? `?nextPageToken=${nextPageToken}` : "");

export const fetchFilteredStudiosList = async (
  limit: number,
  nextPageToken: string,
  city: string,
  query: string,
) => await apiEndpoint.get(`?city=${city}&?query=${query}`);
