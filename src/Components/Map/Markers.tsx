import React, { useState, useCallback } from "react";
import { Marker as GlMarker } from "react-map-gl";

import { IStudio } from "@src/types/studio";
import {
  MarkerInner,
  MarkerWrapper,
  StyledPopup,
  MarkerTitle,
} from "./elements";

type IMarkerComponent = React.FunctionComponent<{ dataList: IStudio[] }>;

export const Markers: IMarkerComponent = ({ dataList }) => {
  const [hoveredMarker, setHoveredMarkerMarker] = useState("");

  const handleMouseOver = useCallback(
    (markerId: string) => setHoveredMarkerMarker(markerId),
    [],
  );
  const handleMouseLeave = useCallback(() => setHoveredMarkerMarker(""), []);

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
          {hoveredMarker === data.id && (
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
