import UnitTypes from "./types";
import { IUnitAction } from ".";
import { RootState, ThunkDispatch } from "@typing/store";
import { IUnit } from "@typing/unit";
import * as effects from "./effects";

export const fetchUnits = (city: string) => async (
    dispatch: ThunkDispatch,
    getStatate: () => RootState,
) => {
    try {
        dispatch(isFetching());

        const { data: unitsList } = await effects.fetchUnits(city);

        dispatch(fetchUnitsSuccess(unitsList));
    } catch (error) {
        dispatch(fetchUnitsReject());
        // tslint:disable-next-line
        console.error(error);
    }
};

export const isFetching = (): IUnitAction => ({
    type: UnitTypes.UNITS_FETCHING,
});

export const fetchUnitsSuccess = (units: IUnit[]): IUnitAction => ({
    type: UnitTypes.UNITS_FETCH_SUCCESS,
    payload: units,
});

export const fetchUnitsReject = (): IUnitAction => ({
    type: UnitTypes.UNITS_FETCH_REJECT,
});

export const setHoveredUnit = (id?: string): IUnitAction => ({
    type: UnitTypes.UNITS_SET_HOVERED,
    payload: id,
});

export const setOpenedUnit = (id?: string): IUnitAction => ({
    type: UnitTypes.UNITS_SET_OPENED,
    payload: id,
});

export const setFilteredUnitsAmount = (amount: number): IUnitAction => ({
    type: UnitTypes.UNITS_SET_FILTERED_AMOUNT,
    payload: amount,
});
