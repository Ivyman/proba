import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IFieldsData } from "@typing/filters";
import { IUnit } from "@typing/unit";
import {
    setHoveredUnit,
    setOpenedUnit,
    setFilteredUnitsAmount,
} from "@store/units/actions";
import { getUnits, getHoveredUnitId } from "@store/units/selectors";
import { getFilterFields } from "@store/filters/selectors";
import useFilters from "@hooks/useFilters";
import useDispatch from "@hooks/useDispatch";
import * as ROUTERS from "@config/router";

import CatalogItem from "@components/dump/CatalogItem";
import CatalogItemsList from "@components/dump/CatalogItemsList";

export const Catalog: React.FC = () => {
    const history = useHistory();

    const units: IUnit[] = useSelector(getUnits);
    const hoverdUnitId: string = useSelector(getHoveredUnitId);
    const filterFields: Omit<IFieldsData, "city"> = useSelector(
        getFilterFields,
    );

    const dispatchHoveredUnit = useDispatch<typeof setHoveredUnit, string>(
        setHoveredUnit,
    );
    const dispatchOpenedUnit = useDispatch<typeof setOpenedUnit, string>(
        setOpenedUnit,
    );
    const dispatchFilteredUnitsAmout = useDispatch<
        typeof setFilteredUnitsAmount,
        number
    >(setFilteredUnitsAmount);

    const filteredUnits = useFilters(units, filterFields);

    const handleItemClick = useCallback(
        (unitId: string) => {
            dispatchOpenedUnit(unitId);
            history.push(`${ROUTERS.CATALOG}/${unitId}`);
        },
        [dispatchOpenedUnit, history],
    );

    useEffect(() => {
        filteredUnits && dispatchFilteredUnitsAmout(filteredUnits.length);
    }, [dispatchFilteredUnitsAmout, filteredUnits]);

    return (
        <CatalogItemsList>
            {filteredUnits.length ? (
                filteredUnits.map((unit: IUnit) => (
                    <CatalogItem
                        key={unit.id}
                        unitData={unit}
                        hoverdUnitId={hoverdUnitId}
                        onHoverUnit={dispatchHoveredUnit}
                        onItemClick={handleItemClick}
                    />
                ))
            ) : (
                <>Nothing found...</>
            )}
        </CatalogItemsList>
    );
};
