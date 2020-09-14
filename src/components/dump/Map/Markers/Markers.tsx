import React, { useCallback, memo, useMemo } from "react";
import { IUnit } from "@typing/unit";
import useStyles from "./styles";

import { Marker as GlMarker, Popup } from "react-map-gl";
import { Typography } from "@material-ui/core";
import DrumIcon from "@assets/drum.svg";

interface IProps {
    dataList: IUnit[];
    hoveredItemId: string;
    openedUnitId: string;
    onMarkerOver: (id: string) => void;
    onMarkerClick: (unitId: string) => void;
    onMarkerLeave: () => void;
}

export const Markers: React.FC<IProps> = memo(
    ({
        dataList,
        hoveredItemId,
        openedUnitId,
        onMarkerOver,
        onMarkerLeave,
        onMarkerClick,
    }) => {
        const classes = useStyles();

        const isHovered = useCallback((id: string) => hoveredItemId === id, [
            hoveredItemId,
        ]);
        const isUnitOpened = useCallback((id: string) => openedUnitId === id, [
            openedUnitId,
        ]);
        const isOpened = useMemo(() => !!openedUnitId, [openedUnitId]);

        return (
            <>
                {dataList.map(({ id, name, address }: IUnit) => (
                    <div
                        key={id}
                        onMouseOver={() => onMarkerOver(id)}
                        onMouseLeave={() => onMarkerLeave()}
                        onClick={() => onMarkerClick(id)}
                    >
                        <GlMarker
                            offsetLeft={-20}
                            offsetTop={-10}
                            className={isUnitOpened(id) ? classes.indexed : ""}
                            latitude={address.latitude}
                            longitude={address.longitude}
                        >
                            <div
                                className={`${classes.marker} ${
                                    isOpened
                                        ? isUnitOpened(id)
                                            ? classes.markerActive
                                            : classes.markerNotActive
                                        : classes.markerDefault
                                }`}
                            >
                                <img
                                    src={DrumIcon}
                                    className={classes.markerIcon}
                                    alt="Drum icon"
                                />
                            </div>
                        </GlMarker>

                        {isHovered(id) && (
                            <Popup
                                anchor="top"
                                offsetTop={30}
                                offsetLeft={-2}
                                closeButton={false}
                                className={classes.popup}
                                latitude={address.latitude}
                                longitude={address.longitude}
                            >
                                <Typography
                                    component="h6"
                                    variant="subtitle2"
                                    className={classes.popupTitle}
                                >
                                    {name}
                                </Typography>
                                <Typography component="p" variant="subtitle2">
                                    {address.street} {address.buildingNumber}
                                </Typography>
                            </Popup>
                        )}
                    </div>
                ))}
            </>
        );
    },
);
