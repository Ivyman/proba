import apiEndpoint from "@src/services/api";

export const fetchStudiosList = async (
  nextPageToken: string,
  limit: number = 10,
) => {
  const params = {
    limit,
    nextPageToken,
  };
  return await apiEndpoint.get("", { params });
};

export const fetchFilteredStudiosList = async (
  nextPageToken: string,
  city: string,
  query: string,
  limit: number = 10,
) => {
  const params = {
    limit,
    query,
    city,
    nextPageToken,
  };
  return await apiEndpoint.get("", { params });
};
