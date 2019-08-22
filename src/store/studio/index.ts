import actionTypes from "./types";
import apiStatuses from "@src/types/api";
import { IStudio } from "@src/types/studio";

export interface IAction {
  type: any;
  payload?: any;
}

export interface IStudioState {
  populatedStatus: apiStatuses;
  studiosList: IStudio[];
  nextPageToken: string;
}

export const initialState: IStudioState = {
  populatedStatus: apiStatuses.IDLE,
  studiosList: [],
  nextPageToken: "",
};

export default (
  state: IStudioState = initialState,
  { type, payload }: IAction,
): IStudioState => {
  switch (type) {
    case actionTypes.STUDIO_LIST_SET:
      return {
        ...state,
        studiosList: payload.studiosList,
        nextPageToken: payload.nextPageToken,
      };
    case actionTypes.STUDIO_LIST_ADD:
      return {
        ...state,
        studiosList: [...state.studiosList, ...payload.studiosList],
        nextPageToken: payload.nextPageToken,
      };
    case actionTypes.STUDIO_POPULATED_STATUS_SET:
      return {
        ...state,
        populatedStatus: payload,
      };
    case actionTypes.STUDIO_RESET:
    default:
      return state;
  }
};