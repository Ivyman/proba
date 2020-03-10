import { IFilters, IFieldsData } from "@src/types/filters";
import { RootState } from "@src/types/store";

export const getFilters = (state: RootState): IFilters => state.filters.fields;

export const getFilterFields = (state: RootState): Omit<IFieldsData, "city"> =>
    state.filters.values;
