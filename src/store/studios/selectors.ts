import { createSelector } from "reselect";

import { IStudio } from "@src/types/studio";
import { EApiStatuses } from "@src/types/api";
import { RootState } from "@src/types/store";

export const getStudios = (state: RootState): IStudio[] =>
    state.studios.studios;

export const getStudiosApiStatus = (state: RootState): EApiStatuses =>
    state.studios.apiStatus;

export const hasMoreStudios = (state: RootState): boolean =>
    !!state.studios.nextPageToken;

export const getHoveredStudioId = (state: RootState): string =>
    state.studios.hoveredStudioId;

export const getOpenedStudioId = (state: RootState): string =>
    state.studios.openedStudioId;

export const getOpenedStudio = createSelector(
    getOpenedStudioId,
    getStudios,
    // TODO remove string | null
    (id: string, studios: IStudio[]) =>
        studios.find((item: IStudio) => item.id === id),
);
