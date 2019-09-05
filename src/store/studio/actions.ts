import StudioTypes from "./types";
import { RootState, ThunkDispatch } from "@src/types/store";
import EApiStatuses from "@src/types/api";
import { IStudio } from "@src/types/studio";
import * as effects from "./effects";

export const populateStudios = () => async (
  dispatch: ThunkDispatch,
  getStatate: () => RootState,
) => {
  try {
    const {
      studio: { nextPageToken },
    } = getStatate();

    const {
      data: { studios, newNextPageToken },
    } = await effects.fetchStudiosList(nextPageToken);

    dispatch(setStudiosList(studios, newNextPageToken));
    dispatch(setPopulatedStatus(EApiStatuses.SUCCESS));
  } catch (error) {
    // tslint:disable-next-line
    console.error(error);
    dispatch(setPopulatedStatus(EApiStatuses.ERROR));
  }
};

export const searchStudios = () => async (
  dispatch: ThunkDispatch,
  getStatate: () => RootState,
) => {
  try {
    // const {
    //   studio: { nextPageToken },
    //   filter: { query, city },
    // } = getStatate();
    // const { studiosList, nextPageToken } = await fetchFilteredStudiosList(nextPageToken, query, city);
    // dispatch(setStudiosList(studiosList, nextPageToken));
    // dispatch(setPopulatedStatus(requestStatus.SUCCESS))
  } catch (error) {
    // tslint:disable-next-line
    console.error(error);
    dispatch(setPopulatedStatus(EApiStatuses.ERROR));
  }
};

export const setStudiosList = (
  studiosList: IStudio[],
  nextPageToken: string,
) => ({
  type: StudioTypes.STUDIO_LIST_SET,
  payload: { studiosList, nextPageToken },
});

export const addStudiosToList = (
  studiosList: IStudio[],
  nextPageToken: string,
) => ({
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
