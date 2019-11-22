import { IFilters } from "@src/types/filters";
import { RootState } from "@src/types/store";

export const getFilters = (state: RootState): IFilters => state.filters.fields;
