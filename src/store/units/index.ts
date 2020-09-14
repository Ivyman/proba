import UnitTypes from "./types";
import { EApiStatuses } from "@typing/api";
import { IUnit } from "@typing/unit";
import { IAction } from "@typing/store";

export interface IUnitAction extends IAction<UnitTypes> {}

export interface IUnitState {
    apiStatus: EApiStatuses;
    units: IUnit[];
    hoveredUnitId: string;
    openedUnitId: string;
    filteredAmount: number;
}

export const initialState: IUnitState = {
    apiStatus: EApiStatuses.IDLE,
    units: [],
    hoveredUnitId: "",
    openedUnitId: "",
    filteredAmount: 0,
};

export default (
    state: IUnitState = initialState,
    { type, payload }: IUnitAction,
): IUnitState => {
    switch (type) {
        case UnitTypes.UNITS_FETCHING:
            return {
                ...state,
                apiStatus: EApiStatuses.RUNNING,
            };

        case UnitTypes.UNITS_FETCH_SUCCESS:
            return {
                ...state,
                apiStatus: EApiStatuses.SUCCESS,
                units: payload,
            };

        case UnitTypes.UNITS_FETCH_REJECT:
            return {
                ...state,
                apiStatus: EApiStatuses.ERROR,
                units: [],
            };

        case UnitTypes.UNITS_SET_HOVERED:
            return {
                ...state,
                hoveredUnitId: payload || "",
            };

        case UnitTypes.UNITS_SET_FILTERED_AMOUNT:
            return {
                ...state,
                filteredAmount: payload || 0,
            };

        case UnitTypes.UNITS_SET_OPENED:
            return {
                ...state,
                openedUnitId: payload || "",
            };

        default:
            return state;
    }
};
