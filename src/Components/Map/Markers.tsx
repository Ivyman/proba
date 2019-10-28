import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { Marker as GlMarker } from "react-map-gl";

import { IStudio } from "@src/types/studio";
import {
  MarkerInner,
  MarkerWrapper,
  StyledPopup,
  MarkerTitle,
} from "./elements";
import { getHoverdStudioId } from "@src/store/app/selectors";

export const Markers: React.FC<{
  dataList: IStudio[];
}> = ({ dataList }) => {
  const [hoveredMarker, setHoveredMarker] = useState("");

  const hoveredItemId = useSelector(getHoverdStudioId);

  const handleMouseOver = useCallback(
    (markerId: string) => setHoveredMarker(markerId),
    [],
  );
  const handleMouseLeave = useCallback(() => setHoveredMarker(""), []);

  return (
    <>
      {dataList.map(data => (
        <MarkerWrapper
          onMouseOver={() => handleMouseOver(data.id)}
          onMouseLeave={handleMouseLeave}
          key={data.id}
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
          {(hoveredMarker === data.id || hoveredItemId === data.id) && (
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
        </MarkerWrapper>
      ))}
    </>
  );
};
