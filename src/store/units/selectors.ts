import { createSelector } from "reselect";

import { IUnit } from "@typing/unit";
import { EApiStatuses } from "@typing/api";
import { RootState } from "@typing/store";

export const getUnits = (state: RootState): IUnit[] => state.units.units;

export const getUnitsApiStatus = (state: RootState): EApiStatuses =>
    state.units.apiStatus;

export const getHoveredUnitId = (state: RootState): string =>
    state.units.hoveredUnitId;

export const getOpenedUnitId = (state: RootState): string =>
    state.units.openedUnitId;

export const getFilteredUnitsAmount = (state: RootState): number =>
    state.units.filteredAmount;

export const getOpenedUnit = createSelector(
    getOpenedUnitId,
    getUnits,
    (id: string, units: IUnit[]) => units.find((item: IUnit) => item.id === id),
);
