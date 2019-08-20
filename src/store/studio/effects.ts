import apiEndpoint from "@src/services/api";
import { studios } from "@src/Config/Constants";

export const fetchStudiosList = async (
  nextPageToken: string,
  limit: number = studios.fetchLimit,
) => await apiEndpoint.get("", { params: { limit, nextPageToken } });

export const fetchFilteredStudiosList = async (
  nextPageToken: string,
  city: string,
  query: string,
  limit: number = studios.fetchLimit,
) =>
  await apiEndpoint.get("", { params: { limit, query, city, nextPageToken } });
