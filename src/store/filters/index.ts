import FiltersTypes from "./types";
import { EApiStatuses } from "@src/types/api";

export interface IAction {
  type: any;
  payload?: any;
}

export interface IFiltersState {
  filters: any;
  fetchStatus: EApiStatuses;
}

export const initialState: IFiltersState = {
  filters: null,
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
        filters: payload,
        fetchStatus: EApiStatuses.SUCCESS,
      };

    case FiltersTypes.FILTERS_FETCH_REJECT:
      return {
        ...state,
        filters: null,
        fetchStatus: EApiStatuses.ERROR,
      };

    default:
      return state;
  }
};
