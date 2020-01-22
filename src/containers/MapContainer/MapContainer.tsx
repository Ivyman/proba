import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IStudio, ECoordinateName } from "@src/types/studio";
import { IViewport } from "@src/types/map";
import { countCoordinateAverage, getCoordinates } from "@src/utils/map";
import {
    getHoveredStudioId,
    getOpenedStudio,
    getStudios,
} from "@src/store/studios/selectors";
import { setHoveredStudio, setOpenedStudio } from "@src/store/studios/actions";
import { useDispatch } from "@src/hooks/dispatch";
import { ICoordinate } from "@src/types/studio";

import Map from "@src/components/Map";

export const MapContainer: React.FC = () => {
    const history = useHistory();

    const hoveredItemId: string = useSelector(getHoveredStudioId);
    const openedStudio: IStudio | undefined = useSelector(getOpenedStudio);
    const studiosList: IStudio[] = useSelector(getStudios);

    const dispatchHoveredStudio = useDispatch<
        typeof setHoveredStudio,
        string | undefined
    >(setHoveredStudio);
    const dispatchOpenedStudio = useDispatch<typeof setOpenedStudio, string>(
        setOpenedStudio,
    );

    const coordinates = useMemo<ICoordinate[]>(
        () => getCoordinates(studiosList),
        [studiosList],
    );
    const getOpenedStudioId = useMemo<string>(
        () => (openedStudio ? openedStudio.id : ""),
        [openedStudio],
    );

    const [viewport, setViewport] = useState<IViewport>({
        width: "100%",
        height: "100%",
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
        history.push(`/catalog/${studioId}`);
    };

    return (
        <Map
            viewport={viewport}
            studiosList={studiosList}
            hoveredItemId={hoveredItemId}
            openedStudioId={getOpenedStudioId}
            onViewportChange={handeleViewportChange}
            onMarkerOver={handleMarkerOver}
            onMarkerLeave={handleMarkerLeave}
            onMarkerClick={handleMarkerClick}
        />
    );
};
