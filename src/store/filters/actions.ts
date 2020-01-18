import { ThunkDispatch } from "@src/types/store";
import { IFiltersAction } from ".";
import { IFilters } from "@src/types/filters";
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

export const fetchFiltersSuccess = (filters: IFilters): IFiltersAction => ({
    type: FiltersTypes.FILTERS_FETCH_SUCCESS,
    payload: filters,
});

export const fetchFiltersReject = (): IFiltersAction => ({
    type: FiltersTypes.FILTERS_FETCH_REJECT,
});
