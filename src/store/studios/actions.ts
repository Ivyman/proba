import StudioTypes from "./types";
import { IStudioAction } from ".";
import { RootState, ThunkDispatch } from "@src/types/store";
import { IStudio } from "@src/types/studio";
import { IFiltersData } from "@src/types/filters";
import * as effects from "./effects";

export const fetchStudios = (filtersData: IFiltersData) => async (
    dispatch: ThunkDispatch,
    getStatate: () => RootState,
) => {
    try {
        const {
            studios: { nextPageToken },
        } = getStatate();

        const {
            data: { studios, nextPageToken: newNextPageToken },
        } = await effects.fetchStudios(filtersData, nextPageToken);

        dispatch(fetchStudiosSuccess(studios, newNextPageToken));
    } catch (error) {
        dispatch(fetchStudiosReject());
        // tslint:disable-next-line
        console.error(error);
    }
};

export const isFetching = (): IStudioAction => ({
    type: StudioTypes.STUDIO_FETCHING,
});

export const fetchStudiosSuccess = (
    studios: IStudio[],
    nextPageToken: string,
): IStudioAction => ({
    type: StudioTypes.STUDIO_FETCH_SUCCESS,
    payload: { studios, nextPageToken },
});

export const studiosAppend = (
    studios: IStudio[],
    nextPageToken: string,
): IStudioAction => ({
    type: StudioTypes.STUDIO_APPEND,
    payload: { studios, nextPageToken },
});

export const fetchStudiosReject = (): IStudioAction => ({
    type: StudioTypes.STUDIO_FETCH_REJECT,
});

export const setHoveredStudio = (id?: string): IStudioAction => ({
    type: StudioTypes.STUDIO_SET_HOVERED,
    payload: id,
});

export const setOpenedStudio = (id?: string): IStudioAction => ({
    type: StudioTypes.STUDIO_SET_OPENED,
    payload: id,
});
