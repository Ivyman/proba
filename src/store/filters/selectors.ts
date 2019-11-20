import { RootState } from "@src/types/store";

export const getCities = (state: RootState) => state.filters.cities;
