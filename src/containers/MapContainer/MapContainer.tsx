import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IStudio, ECoordinateName } from "@src/types/studio";
import { IFieldsData } from "@src/types/filters";
import { useFilterStudios } from "@src/hooks/filterStudios";
import { useDispatch } from "@src/hooks/dispatch";
import { IViewport } from "@src/types/map";
import { countCoordinateAverage, getCoordinates } from "@src/utils/map";
import {
    getHoveredStudioId,
    getOpenedStudio,
    getStudios,
} from "@src/store/studios/selectors";
import { setHoveredStudio, setOpenedStudio } from "@src/store/studios/actions";
import { getFilterFields } from "@src/store/filters/selectors";
import { ICoordinate } from "@src/types/studio";
import * as ROUTERS from "@src/config/router";

import Map from "@src/components/Map";

export const MapContainer: React.FC = () => {
    const history = useHistory();

    const hoveredItemId: string = useSelector(getHoveredStudioId);
    const openedStudio: IStudio | undefined = useSelector(getOpenedStudio);
    const studios: IStudio[] = useSelector(getStudios);
    const filterFields: Omit<IFieldsData, "city"> = useSelector(
        getFilterFields,
    );

    const filteredStudios = useFilterStudios(studios, filterFields);

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
        zoom: 10,
    });

    const handeleViewportChange = (changedViewport: IViewport) =>
        setViewport(changedViewport);
    const handleMarkerOver = (id: string) => dispatchHoveredStudio(id);
    const handleMarkerLeave = () => dispatchHoveredStudio();
    const handleMarkerClick = (studioId: string) => {
        dispatchOpenedStudio(studioId);
        history.push(`${ROUTERS.CATALOG}/${studioId}`);
    };

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
