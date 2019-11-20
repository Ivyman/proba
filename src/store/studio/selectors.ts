import { RootState } from "@src/types/store";

export const getStudios = (state: RootState) => state.studio.studios;

export const getStudiosApiStatus = (state: RootState) => state.studio.apiStatus;

export const hasMoreStudios = (state: RootState) =>
  !!state.studio.nextPageToken;

export const getHoverdStudioId = (state: RootState) =>
  state.studio.hoveredStudioId;

export const getOpenedStudio = (state: RootState) => state.studio.openedStudio;
