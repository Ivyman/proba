import actionTypes from "./types";
import { RootState, ThunkDispatch } from "@src/types/store";
import apiStatuses from "@src/types/api";
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
    dispatch(setPopulatedStatus(apiStatuses.SUCCESS));
  } catch (error) {
    // tslint:disable-next-line
    console.error(error);
    dispatch(setPopulatedStatus(apiStatuses.ERROR));
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
    dispatch(setPopulatedStatus(apiStatuses.ERROR));
  }
};

export const setStudiosList = (
  studiosList: IStudio[],
  nextPageToken: string,
) => ({
  type: actionTypes.STUDIO_LIST_SET,
  payload: { studiosList, nextPageToken },
});

export const addStudiosToList = (
  studiosList: IStudio[],
  nextPageToken: string,
) => ({
  type: actionTypes.STUDIO_LIST_ADD,
  payload: { studiosList, nextPageToken },
});

export const setPopulatedStatus = (status: apiStatuses) => ({
  type: actionTypes.STUDIO_POPULATED_STATUS_SET,
  payload: status,
});

export const resetStudions = () => ({
  type: actionTypes.STUDIO_RESET,
});
