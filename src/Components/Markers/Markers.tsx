import React, { useState, useCallback, memo } from "react";
import { IStudio } from "@src/types/studio";

import { Marker as GlMarker, Popup } from "react-map-gl";

interface IProps {
    dataList: IStudio[];
    hoveredItemId: string;
    openedStudioId: string;
}

export const Markers: React.FC<IProps> = memo(
    ({ dataList, hoveredItemId, openedStudioId }) => {
        const [hoveredMarker, setHoveredMarker] = useState<string>("");

        const isShowPopup = useCallback(
            (data: IStudio) =>
                hoveredMarker === data.id || hoveredItemId === data.id,
            [hoveredMarker, hoveredItemId],
        );

        const isStudioOpened = useCallback(
            (id: string) => openedStudioId === id,
            [openedStudioId],
        );

        const handleMouseOver = (markerId: string) =>
            setHoveredMarker(markerId);

        const handleMouseLeave = () => setHoveredMarker("");

        return (
            <>
                {dataList.map(data => (
                    <div>
                        <GlMarker
                            key={data.id}
                            latitude={data.address.latitude}
                            longitude={data.address.longitude}
                            offsetLeft={-20}
                            offsetTop={-10}
                        >
                            <span>Studio</span>
                        </GlMarker>
                        {isShowPopup(data) && (
                            <Popup
                                latitude={data.address.latitude}
                                longitude={data.address.longitude}
                                offsetTop={14}
                                offsetLeft={8}
                                closeButton={false}
                                anchor="top"
                            >
                                <span>{data.name}</span>
                                <div>
                                    {data.address.street}, {data.address.number}
                                </div>
                            </Popup>
                        )}
                    </div>
                ))}
            </>
        );
    },
);
