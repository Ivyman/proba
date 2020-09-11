import React from "react";
import { IViewport } from "@typing/map";
import { IStudio } from "@typing/studio";
import { GL_MAP } from "@config/constants";
import useStyles from "./styles";

import ReactMapGL, { NavigationControl } from "react-map-gl";
import Markers from "./Markers";

interface IProps {
    studiosList: IStudio[];
    hoveredItemId: string;
    openedStudioId: string;
    viewport: IViewport;
    onViewportChange: (viewport: IViewport) => void;
    onMarkerOver: (id: string) => void;
    onMarkerClick: (studioId: string) => void;
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
    onMarkerClick,
}) => {
    const classes = useStyles();

    return (
        <ReactMapGL
            {...viewport}
            width="100%"
            height="100%"
            className={classes.root}
            mapboxApiAccessToken={GL_MAP.ACCESS_TOKEN}
            onViewportChange={onViewportChange}
        >
            <Markers
                dataList={studiosList}
                hoveredItemId={hoveredItemId}
                openedStudioId={openedStudioId}
                onMarkerOver={onMarkerOver}
                onMarkerLeave={onMarkerLeave}
                onMarkerClick={onMarkerClick}
            />
            <NavigationControl
                showCompass={false}
                showZoom={false}
                className={classes.navigationControl}
            />
        </ReactMapGL>
    );
};
