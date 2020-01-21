import React, { useState } from "react";
import { IViewport } from "@src/types/map";
import { GlMap } from "@src/Confing";
import useStyles from "./styles";

import ReactMapGL, { NavigationControl } from "react-map-gl";
import Markers from "@src/components/Markers";

interface IProps {
    studiosList: any;
    onViewportChange: any;
    hoveredItemId: any;
    openedStudioId: any;
    viewport: any;
}

export const Map: React.FC<IProps> = ({
    studiosList,
    onViewportChange,
    hoveredItemId,
    openedStudioId,
    viewport,
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
            />
            <NavigationControl
                showCompass={false}
                className={classes.navigationControl}
            />
        </ReactMapGL>
    );
};
