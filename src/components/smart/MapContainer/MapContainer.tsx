import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IStudio, ECoordinateName, ICoordinate } from "@typing/studio";
import { IFieldsData } from "@typing/filters";
import { IViewport } from "@typing/map";
import { countCoordinateAverage, getCoordinates } from "@utils/map";
import {
    getHoveredStudioId,
    getOpenedStudio,
    getStudios,
} from "@store/studios/selectors";
import { setHoveredStudio, setOpenedStudio } from "@store/studios/actions";
import { getFilterFields } from "@store/filters/selectors";
import useFilters from "@hooks/useFilters";
import useDispatch from "@hooks/useDispatch";
import * as ROUTERS from "@config/router";

import Map from "@components/dump/Map";

export const MapContainer: React.FC = () => {
    const history = useHistory();

    const hoveredItemId: string = useSelector(getHoveredStudioId);
    const openedStudio: IStudio | undefined = useSelector(getOpenedStudio);
    const studios: IStudio[] = useSelector(getStudios);
    const filterFields: Omit<IFieldsData, "city"> = useSelector(
        getFilterFields,
    );

    const filteredStudios = useFilters(studios, filterFields);

    const dispatchHoveredStudio = useDispatch<
        typeof setHoveredStudio,
        string | undefined
    >(setHoveredStudio);
    const dispatchOpenedStudio = useDispatch<typeof setOpenedStudio, string>(
        setOpenedStudio,
    );

    const coordinates = useMemo<ICoordinate[]>(() => getCoordinates(studios), [
        studios,
    ]);
    const getOpenedStudioId = useMemo<string>(
        () => (openedStudio ? openedStudio.id : ""),
        [openedStudio],
    );

    const [viewport, setViewport] = useState<IViewport>({
        latitude: countCoordinateAverage(coordinates, ECoordinateName.latitude),
        longitude: countCoordinateAverage(
            coordinates,
            ECoordinateName.longitude,
        ),
        zoom: 10.5,
    });

    const handleMarkerOver = (id: string) => dispatchHoveredStudio(id);
    const handleMarkerLeave = () => dispatchHoveredStudio();
    const handleMarkerClick = (studioId: string) => {
        dispatchOpenedStudio(studioId);
        history.push(`${ROUTERS.CATALOG}/${studioId}`);
    };
    const handeleViewportChange = (changedViewport: IViewport) =>
        setViewport(changedViewport);

    return (
        <Map
            viewport={viewport}
            studiosList={filteredStudios}
            hoveredItemId={hoveredItemId}
            openedStudioId={getOpenedStudioId}
            onViewportChange={handeleViewportChange}
            onMarkerOver={handleMarkerOver}
            onMarkerLeave={handleMarkerLeave}
            onMarkerClick={handleMarkerClick}
        />
    );
};
