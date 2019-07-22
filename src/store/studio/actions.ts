import actionTypes from "./types";
import { fetchStudiosList, fetchFilteredStudiosList } from "./effects";

export const populateStudios = async (dispatch: any, getStatate: any) => {
  try {
    // const {
    //   studio: { nextPageToken },
    // } = getStatate();
    // TODO return nextPageToken as "" - empty string
    // const { studiosList, nextPageToken } = await fetchStudiosList(
    //   nextPageToken,
    // );
    // dispatch(setStudiosList(studiosList, nextPageToken));
    // dispatch(setPopulatedStatus(requestStatus.SUCCESS))
  } catch {
    // TODO handle fetchStudiosList(...) responce error
    // dispatch(setPopulatedStatus(requestStatus.ERROR))
  }
};

export const searchStudios = async (dispatch: any, getStatate: any) => {
  try {
    // const {
    //   studio: { nextPageToken },
    //   filter: { query, city },
    // } = getStatate();
    // const { studiosList, nextPageToken } = await fetchFilteredStudiosList(nextPageToken, query, city);
    // dispatch(setStudiosList(studiosList, nextPageToken));
    // dispatch(setPopulatedStatus(requestStatus.SUCCESS))
  } catch {
    // TODO handle fetchStudiosList(...) responce error
    // dispatch(setPopulatedStatus(requestStatus.ERROR))
  }
};

export const setStudiosList = (studiosList: any, nextPageToken: any) => ({
  type: actionTypes.STUDIO_LIST_SET,
  payload: { studiosList, nextPageToken },
});

export const addStudiosToList = (studiosList: any, nextPageToken: any) => ({
  type: actionTypes.STUDIO_LIST_ADD,
  payload: { studiosList, nextPageToken },
});

export const setPopulatedStatus = (status: any) => ({
  type: actionTypes.STUDIO_POPULATED_STATUS_SET,
  payload: status,
});

export const resetStudions = () => ({
  type: actionTypes.STUDIO_RESET,
});
