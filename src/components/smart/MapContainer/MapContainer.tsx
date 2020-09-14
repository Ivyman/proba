import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IUnit, ECoordinateName, ICoordinate } from "@typing/unit";
import { IFieldsData } from "@typing/filters";
import { IViewport } from "@typing/map";
import { countCoordinateAverage, getCoordinates } from "@utils/map";
import {
    getHoveredUnitId,
    getOpenedUnit,
    getUnits,
} from "@store/units/selectors";
import { setHoveredUnit, setOpenedUnit } from "@store/units/actions";
import { getFilterFields } from "@store/filters/selectors";
import useFilters from "@hooks/useFilters";
import useDispatch from "@hooks/useDispatch";
import * as ROUTERS from "@config/router";

import Map from "@components/dump/Map";

export const MapContainer: React.FC = () => {
    const history = useHistory();

    const hoveredItemId: string = useSelector(getHoveredUnitId);
    const openedUnit: IUnit | undefined = useSelector(getOpenedUnit);
    const units: IUnit[] = useSelector(getUnits);
    const filterFields: Omit<IFieldsData, "city"> = useSelector(
        getFilterFields,
    );

    const filteredUnits = useFilters(units, filterFields);

    const dispatchHoveredUnit = useDispatch<
        typeof setHoveredUnit,
        string | undefined
    >(setHoveredUnit);
    const dispatchOpenedUnit = useDispatch<typeof setOpenedUnit, string>(
        setOpenedUnit,
    );

    const coordinates = useMemo<ICoordinate[]>(() => getCoordinates(units), [
        units,
    ]);
    const getOpenedUnitId = useMemo<string>(
        () => (openedUnit ? openedUnit.id : ""),
        [openedUnit],
    );

    const [viewport, setViewport] = useState<IViewport>({
        latitude: countCoordinateAverage(coordinates, ECoordinateName.latitude),
        longitude: countCoordinateAverage(
            coordinates,
            ECoordinateName.longitude,
        ),
        zoom: 10.5,
    });

    const handleMarkerOver = (id: string) => dispatchHoveredUnit(id);
    const handleMarkerLeave = () => dispatchHoveredUnit();
    const handleMarkerClick = (unitId: string) => {
        dispatchOpenedUnit(unitId);
        history.push(`${ROUTERS.CATALOG}/${unitId}`);
    };
    const handeleViewportChange = (changedViewport: IViewport) =>
        setViewport(changedViewport);

    return (
        <Map
            viewport={viewport}
            unitsList={filteredUnits}
            hoveredItemId={hoveredItemId}
            openedUnitId={getOpenedUnitId}
            onViewportChange={handeleViewportChange}
            onMarkerOver={handleMarkerOver}
            onMarkerLeave={handleMarkerLeave}
            onMarkerClick={handleMarkerClick}
        />
    );
};
