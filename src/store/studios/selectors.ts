import { RootState } from "@src/types/store";

export const getStudios = (state: RootState) => state.studios.studios;

export const getStudiosApiStatus = (state: RootState) =>
  state.studios.apiStatus;

export const hasMoreStudios = (state: RootState) =>
  !!state.studios.nextPageToken;

export const getHoverdStudioId = (state: RootState) =>
  state.studios.hoveredStudioId;

export const getOpenedStudio = (state: RootState) => state.studios.openedStudio;
