import React, { useState } from "react";
import ReactMapGL, { NavigationControl, Marker } from "react-map-gl";

import { GlMap } from "@src/config/Confing";
import { ICoordinate } from "@src/types/studio";
import styled from "@src/styles";

type IMapComponent = React.FunctionComponent<{ markersList: ICoordinate[] }>;

// TODO move this outside
const countAverageLatitude = (coordinates: ICoordinate[]) =>
  coordinates.reduce(
    (averageLatitude: number, coordinate: ICoordinate) =>
      averageLatitude + coordinate.latitude,
    0,
  ) / coordinates.length;

// TODO move this outside
const countAverageLongitude = (coordinates: ICoordinate[]) =>
  coordinates.reduce(
    (averageLongitude: number, coordinate: ICoordinate) =>
      averageLongitude + coordinate.longitude,
    0,
  ) / coordinates.length;

export const Map: IMapComponent = ({ markersList }) => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    // TODO change this depend on chosen city
    latitude: countAverageLatitude(markersList),
    longitude: countAverageLongitude(markersList),
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
