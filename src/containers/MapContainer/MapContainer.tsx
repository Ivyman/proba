import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { IStudio, ECoordinateName } from "@src/types/studio";
import { IViewport } from "@src/types/map";
import { countCoordinateAverage, getCoordinates } from "@src/utils/map";
import {
    getHoverdStudioId,
    getOpenedStudio,
    getStudios,
} from "@src/store/studios/selectors";
import { setHoveredStudio } from "@src/store/studios/actions";
import { useDispatch } from "@src/hooks/dispatch";
import { ICoordinate } from "@src/types/studio";

import Map from "@src/components/Map";

export const MapContainer: React.FC = () => {
    const hoveredItemId: string = useSelector(getHoverdStudioId);
    const openedStudio: IStudio | undefined = useSelector(getOpenedStudio);
    const studiosList: IStudio[] = useSelector(getStudios);

    const dispatchHoveredStudio = useDispatch<
        typeof setHoveredStudio,
        string | undefined
    >(setHoveredStudio);

    const coordinates = useMemo<ICoordinate[]>(
        () => getCoordinates(studiosList),
        [studiosList],
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
    const getOpenedStudioId = useMemo<string>(
        () => (openedStudio ? openedStudio.id : ""),
        [openedStudio],
    );
    const handeleViewportChange = (changedViewport: IViewport) =>
        setViewport(changedViewport);
    const handleMarkerOver = (id: string) => dispatchHoveredStudio(id);
    const handleMarkerLeave = () => dispatchHoveredStudio();

    return (
        <Map
            studiosList={studiosList}
            onViewportChange={handeleViewportChange}
            onMarkerOver={handleMarkerOver}
            onMarkerLeave={handleMarkerLeave}
            hoveredItemId={hoveredItemId}
            openedStudioId={getOpenedStudioId}
            viewport={viewport}
        />
    );
};
