import React from "react";
import { IViewport } from "@typing/map";
import { IUnit } from "@typing/unit";
import { GL_MAP } from "@config/constants";
import useStyles from "./styles";

import ReactMapGL, { NavigationControl } from "react-map-gl";
import Markers from "./Markers";

interface IProps {
    unitsList: IUnit[];
    hoveredItemId: string;
    openedUnitId: string;
    viewport: IViewport;
    onViewportChange: (viewport: IViewport) => void;
    onMarkerOver: (id: string) => void;
    onMarkerClick: (unitId: string) => void;
    onMarkerLeave: () => void;
}

export const Map: React.FC<IProps> = ({
    viewport,
    unitsList,
    hoveredItemId,
    openedUnitId,
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
                dataList={unitsList}
                hoveredItemId={hoveredItemId}
                openedUnitId={openedUnitId}
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
