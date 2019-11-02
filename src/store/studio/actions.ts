import StudioTypes from "./types";
import { RootState, ThunkDispatch } from "@src/types/store";
import EApiStatuses from "@src/types/api";
import { IStudio } from "@src/types/studio";
import * as effects from "./effects";
import { IFiltersData } from "@src/types/studio";

export const populateStudios = (filtersData?: IFiltersData) => async (
  dispatch: ThunkDispatch,
  getStatate: () => RootState,
) => {
  try {
    const {
      studio: { nextPageToken },
    } = getStatate();

    const {
      data: { studios, newNextPageToken },
    } = await effects.fetchStudiosList(nextPageToken, filtersData);

    dispatch(setStudiosList(studios, newNextPageToken));
    dispatch(setPopulatedStatus(EApiStatuses.SUCCESS));
  } catch (error) {
    // tslint:disable-next-line
    console.error(error);
    dispatch(setPopulatedStatus(EApiStatuses.ERROR));
  }
};

export const setStudiosList = (studiosList: IStudio[], nextPageToken: string) => ({
  type: StudioTypes.STUDIO_LIST_SET,
  payload: { studiosList, nextPageToken },
});

export const addStudiosToList = (studiosList: IStudio[], nextPageToken: string) => ({
  type: StudioTypes.STUDIO_LIST_ADD,
  payload: { studiosList, nextPageToken },
});

export const setPopulatedStatus = (status: EApiStatuses) => ({
  type: StudioTypes.STUDIO_POPULATED_STATUS_SET,
  payload: status,
});

export const resetStudions = () => ({
  type: StudioTypes.STUDIO_RESET,
});

export const setHoveredStudio = (id: string) => ({
  type: StudioTypes.STUDIO_SET_HOVERED_STUDIO,
  payload: id,
});

export const setOpenedStudio = (studio: IStudio | null) => ({
  type: StudioTypes.STUDIO_SET_OPENED_STUDIO,
  payload: studio,
});
