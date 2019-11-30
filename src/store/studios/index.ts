import StudioTypes from "./types";
import { EApiStatuses } from "@src/types/api";
import { IStudio } from "@src/types/studio";
import { IAction } from "@src/types/store";

export interface IStudioState {
  apiStatus: EApiStatuses;
  studios: IStudio[];
  nextPageToken: string | null;
  hoveredStudioId: string | null;
  openedStudioId: string | null;
}

export const initialState: IStudioState = {
  apiStatus: EApiStatuses.IDLE,
  studios: [],
  nextPageToken: null,
  hoveredStudioId: null,
  openedStudioId: null,
};

export default (
  state: IStudioState = initialState,
  { type, payload }: IAction,
): IStudioState => {
  switch (type) {
    case StudioTypes.STUDIO_FETCHING:
      return {
        ...state,
        apiStatus: EApiStatuses.RUNNING,
      };

    case StudioTypes.STUDIO_FETCH_SUCCESS:
      return {
        ...state,
        apiStatus: EApiStatuses.SUCCESS,
        studios: payload.studios,
        nextPageToken: payload.nextPageToken,
      };

    case StudioTypes.STUDIO_FETCH_REJECT:
      return {
        ...state,
        apiStatus: EApiStatuses.ERROR,
        studios: [],
        nextPageToken: null,
      };

    case StudioTypes.STUDIO_APPEND:
      return {
        ...state,
        studios: [...state.studios, ...payload.studios],
        nextPageToken: payload.nextPageToken,
      };

    case StudioTypes.STUDIO_SET_HOVERED:
      return {
        ...state,
        hoveredStudioId: payload || null,
      };

    case StudioTypes.STUDIO_SET_OPENED:
      return {
        ...state,
        openedStudioId: payload || null,
      };

    default:
      return state;
  }
};
