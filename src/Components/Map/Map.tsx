import React from "react";
import { IViewport } from "@src/types/map";
import { IStudio } from "@src/types/studio";
import { GlMap } from "@src/Confing";
import useStyles from "./styles";

import ReactMapGL, { NavigationControl } from "react-map-gl";
import Markers from "@src/components/Markers";

interface IProps {
    studiosList: IStudio[];
    hoveredItemId: string;
    openedStudioId: string;
    viewport: IViewport;
    onViewportChange: (viewport: IViewport) => void;
    onMarkerOver: (id: string) => void;
    onMarkerLeave: () => void;
}

export const Map: React.FC<IProps> = ({
    viewport,
    studiosList,
    hoveredItemId,
    openedStudioId,
    onViewportChange,
    onMarkerOver,
    onMarkerLeave,
}) => {
    const classes = useStyles();

    return (
        <ReactMapGL
            {...viewport}
            scrollZoom={false}
            mapboxApiAccessToken={GlMap.accessToken}
            onViewportChange={onViewportChange}
        >
            <Markers
                dataList={studiosList}
                hoveredItemId={hoveredItemId}
                openedStudioId={openedStudioId}
                onMarkerOver={onMarkerOver}
                onMarkerLeave={onMarkerLeave}
            />
            <NavigationControl
                showCompass={false}
                className={classes.navigationControl}
            />
        </ReactMapGL>
    );
};
