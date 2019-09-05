import StudioTypes from "./types";
import EApiStatuses from "@src/types/api";
import { IStudio } from "@src/types/studio";

export interface IAction {
  type: any;
  payload?: any;
}

export interface IStudioState {
  populatedStatus: EApiStatuses;
  studiosList: IStudio[];
  nextPageToken: string;
}

export const initialState: IStudioState = {
  populatedStatus: EApiStatuses.IDLE,
  studiosList: [],
  nextPageToken: "",
};

export default (
  state: IStudioState = initialState,
  { type, payload }: IAction,
): IStudioState => {
  switch (type) {
    case StudioTypes.STUDIO_LIST_SET:
      return {
        ...state,
        studiosList: payload.studiosList,
        nextPageToken: payload.nextPageToken,
      };
    case StudioTypes.STUDIO_LIST_ADD:
      return {
        ...state,
        studiosList: [...state.studiosList, ...payload.studiosList],
        nextPageToken: payload.nextPageToken,
      };
    case StudioTypes.STUDIO_POPULATED_STATUS_SET:
      return {
        ...state,
        populatedStatus: payload,
      };
    case StudioTypes.STUDIO_RESET:
    default:
      return state;
  }
};
