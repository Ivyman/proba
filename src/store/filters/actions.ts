import { RootState, ThunkDispatch } from "@src/types/store";
import FiltersTypes from "./types";
import * as effects from "./effects";

export const fetchFilters = () => async (dispatch: ThunkDispatch) => {
  try {
    const { filters } = await effects.fetchFilters();

    dispatch(fetchFiltersSuccess(filters));
  } catch (error) {
    dispatch(fetchFiltersReject());
    // tslint:disable-next-line
    console.error(error);
  }
};

// TODO create filters type
export const fetchFiltersSuccess = (filters: any) => ({
  type: FiltersTypes.FILTERS_FETCH_SUCCESS,
  payload: filters,
});

export const fetchFiltersReject = () => ({
  type: FiltersTypes.FILTERS_FETCH_REJECT,
});
