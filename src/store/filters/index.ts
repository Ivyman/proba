import FiltersTypes from "./types";
import { EApiStatuses } from "@src/types/api";
import { IFilter } from "@src/types/filters";
import { IAction } from "@src/types/store";

export interface IFiltersAction extends IAction<FiltersTypes> {}

export interface IFiltersState {
    fields: {
        cities: IFilter[];
    };
    fetchStatus: EApiStatuses;
}

export const initialState: IFiltersState = {
    fields: {
        cities: [],
    },
    fetchStatus: EApiStatuses.IDLE,
};

export default (
    state: IFiltersState = initialState,
    { type, payload }: IFiltersAction,
): IFiltersState => {
    switch (type) {
        case FiltersTypes.FILTERS_FETCH_SUCCESS:
            return {
                ...state,
                fields: payload,
                fetchStatus: EApiStatuses.SUCCESS,
            };

        case FiltersTypes.FILTERS_FETCH_REJECT:
            return {
                ...state,
                fields: {
                    cities: [],
                },
                fetchStatus: EApiStatuses.ERROR,
            };

        default:
            return state;
    }
};
