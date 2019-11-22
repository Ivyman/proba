import { ThunkDispatch } from "@src/types/store";
import { IFilters } from "@src/types/filters";
import { IAction } from "@src/types/store";
import FiltersTypes from "./types";
import * as effects from "./effects";

export const fetchFilters = () => async (dispatch: ThunkDispatch) => {
  try {
    const { data: filters } = await effects.fetchFilters();

    dispatch(fetchFiltersSuccess(filters));
  } catch (error) {
    dispatch(fetchFiltersReject());
    // tslint:disable-next-line
    console.error(error);
  }
};

export const fetchFiltersSuccess = (filters: IFilters): IAction => ({
  type: FiltersTypes.FILTERS_FETCH_SUCCESS,
  payload: filters,
});

export const fetchFiltersReject = (): IAction => ({
  type: FiltersTypes.FILTERS_FETCH_REJECT,
});
