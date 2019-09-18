import React, { useState } from "react";
import ReactMapGL, { NavigationControl, Marker } from "react-map-gl";

import { GlMap } from "@src/config/Confing";
import { ICoordinate, ECoordinateName } from "@src/types/studio";
import styled from "@src/styles";

type IMapComponent = React.FunctionComponent<{ markersList: ICoordinate[] }>;

export const Map: IMapComponent = ({ markersList }) => {
  const countCoordinateAverage = (
    coordinates: ICoordinate[],
    name: ECoordinateName,
  ) =>
    coordinates.reduce(
      (averageLongitude: number, currentCoordinates: ICoordinate) =>
        averageLongitude + currentCoordinates[name],
      0,
    ) / coordinates.length;

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    // TODO change this depend on chosen city in filters
    latitude: countCoordinateAverage(markersList, ECoordinateName.latitude),
    longitude: countCoordinateAverage(markersList, ECoordinateName.longitude),
    zoom: 10,
  });

  const handeleViewportChange = (changedViewport: any) => {
    setViewport(changedViewport);
  };

  return (
    <Container>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={GlMap.accessToken}
        onViewportChange={handeleViewportChange}
      >
        {markersList.map(marker => (
          <Marker
            key={marker.id}
            latitude={marker.latitude}
            longitude={marker.longitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <MarkerInner>Studio</MarkerInner>
          </Marker>
        ))}
        <NavigationControlWrapper>
          <NavigationControl showCompass={false} />
        </NavigationControlWrapper>
      </ReactMapGL>
    </Container>
  );
};

export const MarkerInner = styled.div`
  background: gray;
  border: 1px slid black;
  color: white;
  padding: 5px;
`;

export const NavigationControlWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  right: 12px;
`;

export const Container = styled.div`
  background-color: gray;
  height: 100vh;
  width: 50%;
`;
