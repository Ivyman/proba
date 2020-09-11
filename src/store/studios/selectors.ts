import { createSelector } from "reselect";

import { IStudio } from "@typing/studio";
import { EApiStatuses } from "@typing/api";
import { RootState } from "@typing/store";

export const getStudios = (state: RootState): IStudio[] =>
    state.studios.studios;

export const getStudiosApiStatus = (state: RootState): EApiStatuses =>
    state.studios.apiStatus;

export const getHoveredStudioId = (state: RootState): string =>
    state.studios.hoveredStudioId;

export const getOpenedStudioId = (state: RootState): string =>
    state.studios.openedStudioId;

export const getFilteredStudiosAmount = (state: RootState): number =>
    state.studios.filteredAmount;

export const getOpenedStudio = createSelector(
    getOpenedStudioId,
    getStudios,
    // TODO remove string | null
    (id: string, studios: IStudio[]) =>
        studios.find((item: IStudio) => item.id === id),
);
