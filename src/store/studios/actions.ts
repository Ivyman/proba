import StudioTypes from "./types";
import { IStudioAction } from ".";
import { RootState, ThunkDispatch } from "@src/types/store";
import { IStudio } from "@src/types/studio";
import * as effects from "./effects";

export const fetchStudios = (city: string) => async (
    dispatch: ThunkDispatch,
    getStatate: () => RootState,
) => {
    try {
        const { data: studiosList } = await effects.fetchStudios(city);

        dispatch(fetchStudiosSuccess(studiosList));
    } catch (error) {
        dispatch(fetchStudiosReject());
        // tslint:disable-next-line
        console.error(error);
    }
};

export const isFetching = (): IStudioAction => ({
    type: StudioTypes.STUDIOS_FETCHING,
});

export const fetchStudiosSuccess = (studios: IStudio[]): IStudioAction => ({
    type: StudioTypes.STUDIOS_FETCH_SUCCESS,
    payload: studios,
});

export const fetchStudiosReject = (): IStudioAction => ({
    type: StudioTypes.STUDIOS_FETCH_REJECT,
});

export const setHoveredStudio = (id?: string): IStudioAction => ({
    type: StudioTypes.STUDIOS_SET_HOVERED,
    payload: id,
});

export const setOpenedStudio = (id?: string): IStudioAction => ({
    type: StudioTypes.STUDIOS_SET_OPENED,
    payload: id,
});
