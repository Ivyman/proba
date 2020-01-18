import StudioTypes from "./types";
import { EApiStatuses } from "@src/types/api";
import { IStudio } from "@src/types/studio";
import { IAction } from "@src/types/store";

export interface IStudioAction extends IAction<StudioTypes> {}

export interface IStudioState {
    apiStatus: EApiStatuses;
    studios: IStudio[];
    nextPageToken: string;
    hoveredStudioId: string;
    openedStudioId: string;
}

export const initialState: IStudioState = {
    apiStatus: EApiStatuses.IDLE,
    studios: [],
    nextPageToken: "",
    hoveredStudioId: "",
    openedStudioId: "",
};

export default (
    state: IStudioState = initialState,
    { type, payload }: IStudioAction,
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
                nextPageToken: "",
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
                hoveredStudioId: payload || "",
            };

        case StudioTypes.STUDIO_SET_OPENED:
            return {
                ...state,
                openedStudioId: payload || "",
            };

        default:
            return state;
    }
};
