import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { GlMap } from "@src/Confing";
import { IStudio, ECoordinateName } from "@src/types/studio";
import { countCoordinateAverage, getCoordinates } from "@src/utils/map";
import {
    getHoverdStudioId,
    getOpenedStudio,
    getStudios,
} from "@src/store/studios/selectors";
import { ICoordinate } from "@src/types/studio";

import ReactMapGL, { NavigationControl } from "react-map-gl";
import Markers from "@src/components/Markers";

export const Map: React.FC = () => {
    const hoveredItemId: string = useSelector(getHoverdStudioId);
    const openedStudio: IStudio | undefined = useSelector(getOpenedStudio);
    const studiosList: IStudio[] = useSelector(getStudios);

    const coordinates = useMemo<ICoordinate[]>(
        () => getCoordinates(studiosList),
        [studiosList],
    );

    // TODO any
    const [viewport, setViewport] = useState<any>({
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

    const handeleViewportChange = (changedViewport: any) =>
        setViewport(changedViewport);

    return (
        <ReactMapGL
            {...viewport}
            scrollZoom={false}
            mapboxApiAccessToken={GlMap.accessToken}
            onViewportChange={handeleViewportChange}
        >
            <Markers
                dataList={studiosList}
                hoveredItemId={hoveredItemId}
                openedStudioId={getOpenedStudioId}
            />
            <NavigationControl>
                <NavigationControl showCompass={false} />
            </NavigationControl>
        </ReactMapGL>
    );
};
