import { ThunkDispatch } from "@typing/store";
import { IFilters, IFieldsData } from "@typing/filters";
import { IFiltersAction } from ".";
import FiltersTypes from "./types";
import * as effects from "./effects";

export const fetchFilters = () => async (dispatch: ThunkDispatch) => {
    try {
        dispatch(isFetching());

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

export const setFilterFields = (
    fields: Omit<IFieldsData, "city">,
): IFiltersAction => ({
    type: FiltersTypes.FILTERS_SET_FIELDS,
    payload: fields,
});

export const isFetching = (): IFiltersAction => ({
    type: FiltersTypes.FILTERS_FETCHING,
});
