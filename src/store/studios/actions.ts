import StudioTypes from "./types";
import { RootState, ThunkDispatch } from "@src/types/store";
import { IStudio } from "@src/types/studio";
import { IFiltersData } from "@src/types/filters";
import { IAction } from "@src/types/store";
import * as effects from "./effects";

export const fetchStudios = (filtersData?: IFiltersData) => async (
  dispatch: ThunkDispatch,
  getStatate: () => RootState,
) => {
  try {
    dispatch(isFetching());

    const {
      studios: { nextPageToken },
    } = getStatate();

    const {
      data: { studios, nextPageToken: newNextPageToken },
    } = await effects.fetchStudios(nextPageToken, filtersData);

    dispatch(fetchStudiosSuccess(studios, newNextPageToken));
  } catch (error) {
    dispatch(fetchStudiosReject());
    // tslint:disable-next-line
    console.error(error);
  }
};

export const isFetching = (): IAction => ({
  type: StudioTypes.STUDIO_FETCHING,
});

export const fetchStudiosSuccess = (
  studios: IStudio[],
  nextPageToken: string,
): IAction => ({
  type: StudioTypes.STUDIO_FETCH_SUCCESS,
  payload: { studios, nextPageToken },
});

export const studiosAppend = (
  studios: IStudio[],
  nextPageToken: string,
): IAction => ({
  type: StudioTypes.STUDIO_APPEND,
  payload: { studios, nextPageToken },
});

export const fetchStudiosReject = (): IAction => ({
  type: StudioTypes.STUDIO_FETCH_REJECT,
});

export const setHoveredStudio = (id?: string): IAction => ({
  type: StudioTypes.STUDIO_SET_HOVERED,
  payload: id,
});

export const setOpenedStudio = (id?: string): IAction => ({
  type: StudioTypes.STUDIO_SET_OPENED,
  payload: id,
});
