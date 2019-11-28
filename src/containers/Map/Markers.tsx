import React, { useState, useCallback } from "react";
import { Marker as GlMarker } from "react-map-gl";

import { IStudio } from "@src/types/studio";
import { MarkerInner, Wrapper, StyledPopup, MarkerTitle } from "./elements";

export const Markers: React.FC<{
  dataList: IStudio[];
  hoveredItemId: string | null;
  openedStudioId: string | null;
}> = ({ dataList, hoveredItemId, openedStudioId }) => {
  const [hoveredMarker, setHoveredMarker] = useState("");
  const isShowPopup = (data: IStudio) =>
    hoveredMarker === data.id || hoveredItemId === data.id;

  const handleMouseOver = useCallback(
    (markerId: string) => setHoveredMarker(markerId),
    [],
  );
  const handleMouseLeave = useCallback(() => setHoveredMarker(""), []);

  const isStudioOpened = useCallback((id: string) => openedStudioId === id, [
    openedStudioId,
  ]);

  return (
    <>
      {dataList.map(data => (
        <Wrapper
          key={data.id}
          isOpened={isStudioOpened(data.id)}
          onMouseOver={() => handleMouseOver(data.id)}
          onMouseLeave={handleMouseLeave}
        >
          <GlMarker
            key={data.id}
            latitude={data.address.latitude}
            longitude={data.address.longitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <MarkerInner>Studio</MarkerInner>
          </GlMarker>
          {isShowPopup(data) && (
            <StyledPopup
              latitude={data.address.latitude}
              longitude={data.address.longitude}
              offsetTop={14}
              offsetLeft={8}
              closeButton={false}
              anchor="top"
            >
              <MarkerTitle>{data.name}</MarkerTitle>
              <div>
                {data.address.street}, {data.address.number}
              </div>
            </StyledPopup>
          )}
        </Wrapper>
      ))}
    </>
  );
};
