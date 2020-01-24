import React, { useCallback, memo, useMemo } from "react";
import { IStudio } from "@src/types/studio";
import useStyles from "./styles";

import { Marker as GlMarker, Popup } from "react-map-gl";
import { Typography } from "@material-ui/core";
import { ReactComponent as DrumIcon } from "@src/assets/drum.svg";

interface IProps {
    dataList: IStudio[];
    hoveredItemId: string;
    openedStudioId: string;
    onMarkerOver: (id: string) => void;
    onMarkerClick: (studioId: string) => void;
    onMarkerLeave: () => void;
}

export const Markers: React.FC<IProps> = memo(
    ({
        dataList,
        hoveredItemId,
        openedStudioId,
        onMarkerOver,
        onMarkerLeave,
        onMarkerClick,
    }) => {
        const classes = useStyles();

        const isHovered = useCallback((id: string) => hoveredItemId === id, [
            hoveredItemId,
        ]);
        const isStudioOpened = useCallback(
            (id: string) => openedStudioId === id,
            [openedStudioId],
        );
        const isOpened = useMemo(() => !!openedStudioId, [openedStudioId]);

        return (
            <>
                {dataList.map(({ id, name, address }: IStudio) => (
                    <div
                        key={id}
                        onMouseOver={() => onMarkerOver(id)}
                        onMouseLeave={() => onMarkerLeave()}
                        onClick={() => onMarkerClick(id)}
                    >
                        <GlMarker
                            offsetLeft={-20}
                            offsetTop={-10}
                            latitude={address.latitude}
                            longitude={address.longitude}
                        >
                            <div
                                className={`${classes.marker} ${
                                    isOpened
                                        ? isStudioOpened(id)
                                            ? classes.markerActive
                                            : classes.markerNotActive
                                        : classes.markerDefault
                                }`}
                            >
                                <DrumIcon className={classes.markerIcon} />
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
