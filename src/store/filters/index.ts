import FiltersTypes from "./types";
import { EApiStatuses } from "@src/types/api";
import { IFilters } from "@src/types/filters";
import { IAction } from "@src/types/store";

export interface IFiltersState {
  cities: IFilters[];
  fetchStatus: EApiStatuses;
}

export const initialState: IFiltersState = {
  cities: [],
  fetchStatus: EApiStatuses.IDLE,
};

export default (
  state: IFiltersState = initialState,
  { type, payload }: IAction,
): IFiltersState => {
  switch (type) {
    case FiltersTypes.FILTERS_FETCH_SUCCESS:
      return {
        ...state,
        cities: payload,
        fetchStatus: EApiStatuses.SUCCESS,
      };

    case FiltersTypes.FILTERS_FETCH_REJECT:
      return {
        ...state,
        cities: [],
        fetchStatus: EApiStatuses.ERROR,
      };

    default:
      return state;
  }
};
