import { IFilters, IFieldsData } from "@typing/filters";
import { RootState } from "@typing/store";
import { EApiStatuses } from "@typing/api";

export const getFilters = (state: RootState): IFilters => state.filters.fields;

export const getFilterFields = (state: RootState): Omit<IFieldsData, "city"> =>
    state.filters.values;

export const getFiltersApiStatus = (state: RootState): EApiStatuses =>
    state.filters.apiStatus;
