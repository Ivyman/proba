import { RootState } from "@src/types/store";

export const getStudiosList = (state: RootState) => state.studio.studiosList;

export const getPopulatedStatus = (state: RootState) =>
  state.studio.populatedStatus;

export const hasMoreStudios = (state: RootState) =>
  !!state.studio.nextPageToken;
