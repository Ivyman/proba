import { ICityFilter } from "@src/types/filters";
import { RootState } from "@src/types/store";

export const getCities = (state: RootState): ICityFilter[] =>
  state.filters.cities;
