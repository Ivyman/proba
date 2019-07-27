import { createSelector } from "reselect";
import { RootState } from "@src/types/store";

export const getStudiosList = (state: RootState) => state.studio.studiosList;

export const getNextPageToken = (state: RootState) =>
  state.studio.nextPageToken;

export const getPopulatedStatus = (state: RootState) =>
  state.studio.populatedStatus;

export const hasMoreStudios = (state: RootState) =>
  createSelector(
    getNextPageToken,
    nextPageToken => !!nextPageToken,
  );
