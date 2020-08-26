import StudioTypes from "./types";
import { EApiStatuses } from "@src/types/api";
import { IStudio } from "@src/types/studio";
import { IAction } from "@src/types/store";

export interface IStudioAction extends IAction<StudioTypes> {}

export interface IStudioState {
    apiStatus: EApiStatuses;
    studios: IStudio[];
    hoveredStudioId: string;
    openedStudioId: string;
    filteredAmount: number;
}

export const initialState: IStudioState = {
    apiStatus: EApiStatuses.IDLE,
    studios: [],
    hoveredStudioId: "",
    openedStudioId: "",
    filteredAmount: 0,
};

export default (
    state: IStudioState = initialState,
    { type, payload }: IStudioAction,
): IStudioState => {
    switch (type) {
        case StudioTypes.STUDIOS_FETCHING:
            return {
                ...state,
                apiStatus: EApiStatuses.RUNNING,
            };

        case StudioTypes.STUDIOS_FETCH_SUCCESS:
            return {
                ...state,
                apiStatus: EApiStatuses.SUCCESS,
                studios: payload,
            };

        case StudioTypes.STUDIOS_FETCH_REJECT:
            return {
                ...state,
                apiStatus: EApiStatuses.ERROR,
                studios: [],
            };

        case StudioTypes.STUDIOS_SET_HOVERED:
            return {
                ...state,
                hoveredStudioId: payload || "",
            };

        case StudioTypes.STUDIOS_SET_FILTERED_AMOUNT:
            return {
                ...state,
                filteredAmount: payload,
            };

        case StudioTypes.STUDIOS_SET_OPENED:
            return {
                ...state,
                openedStudioId: payload || "",
            };

        default:
            return state;
    }
};
