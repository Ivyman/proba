import FiltersTypes from "./types";
import { EApiStatuses } from "@src/types/api";
import { IFilters } from "@src/types/filters";
import { IAction } from "@src/types/store";
import { convertToOptionsList } from "@src/utils/filters";

export interface IFiltersAction extends IAction<FiltersTypes> {}

export interface IFiltersState {
    fields: IFilters;
    values: {
        searchQuery: string;
        cityArea: string;
        services: string[];
    };
    apiStatus: EApiStatuses;
}

export const initialState: IFiltersState = {
    fields: {
        services: [],
        cities: [],
        cityAreas: {},
    },
    values: {
        searchQuery: "",
        cityArea: "",
        services: [],
    },
    apiStatus: EApiStatuses.IDLE,
};

export default (
    state: IFiltersState = initialState,
    { type, payload }: IFiltersAction,
): IFiltersState => {
    switch (type) {
        case FiltersTypes.FILTERS_FETCHING:
            return {
                ...state,
                apiStatus: EApiStatuses.RUNNING,
            };

        case FiltersTypes.FILTERS_FETCH_SUCCESS:
            return {
                ...state,
                fields: {
                    ...payload,
                    services: convertToOptionsList(payload.services),
                },
                apiStatus: EApiStatuses.SUCCESS,
            };

        case FiltersTypes.FILTERS_FETCH_REJECT:
            return {
                ...initialState,
                apiStatus: EApiStatuses.ERROR,
            };

        case FiltersTypes.FILTERS_SET_FIELDS:
            return {
                ...state,
                values: payload,
            };

        default:
            return state;
    }
};
