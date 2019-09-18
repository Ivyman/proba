import React, { useState } from "react";
import ReactMapGL, { NavigationControl, Marker } from "react-map-gl";

import { GlMap } from "@src/config/Confing";
import { ICoordinate, ECoordinateName } from "@src/types/studio";
import {
  MapContainer,
  NavigationControlWrapper,
  MarkerInner,
} from "./elements";

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
    <MapContainer>
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
    </MapContainer>
  );
};
