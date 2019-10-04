import React, { useState, useCallback } from "react";
import ReactMapGL, { NavigationControl, Marker } from "react-map-gl";

import { GlMap } from "@src/config/Confing";
import { ICoordinate, ECoordinateName } from "@src/types/studio";
import { countCoordinateAverage } from "@src/helpers";
import {
  MapContainer,
  NavigationControlWrapper,
  MarkerInner,
  MarkerWrapper,
  StyledPopup,
} from "./elements";

type IMapComponent = React.FunctionComponent<{ markersList: ICoordinate[] }>;

export const Map: IMapComponent = ({ markersList }) => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    // TODO change this depend on chosen city in filters
    latitude: countCoordinateAverage(markersList, ECoordinateName.latitude),
    longitude: countCoordinateAverage(markersList, ECoordinateName.longitude),
    zoom: 10,
  });
  const [hoveredMarker, setHoveredMarkerMarker] = useState("");

  const handeleViewportChange = (changedViewport: any) => {
    setViewport(changedViewport);
  };

  const handleMouseOver = useCallback(
    (markerId: string) => setHoveredMarkerMarker(markerId),
    [],
  );
  const handleMouseLeave = useCallback(() => setHoveredMarkerMarker(""), []);

  return (
    <MapContainer>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={GlMap.accessToken}
        onViewportChange={handeleViewportChange}
      >
        {markersList.map(marker => (
          <MarkerWrapper
            onMouseOver={() => handleMouseOver(marker.id)}
            onMouseLeave={handleMouseLeave}
            key={marker.id}
          >
            <Marker
              key={marker.id}
              latitude={marker.latitude}
              longitude={marker.longitude}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <MarkerInner>Studio</MarkerInner>
            </Marker>
            {hoveredMarker === marker.id && (
              <StyledPopup
                latitude={marker.latitude}
                longitude={marker.longitude}
                offsetTop={14}
                offsetLeft={8}
                closeButton={false}
                anchor="top"
              >
                <div>You are here</div>
              </StyledPopup>
            )}
          </MarkerWrapper>
        ))}
        <NavigationControlWrapper>
          <NavigationControl showCompass={false} />
        </NavigationControlWrapper>
      </ReactMapGL>
    </MapContainer>
  );
};
