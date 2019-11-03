import React, { useState } from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";
import { useSelector } from "react-redux";

import { GlMap } from "@src/config/Confing";
import { IStudio, ECoordinateName } from "@src/types/studio";
import { countCoordinateAverage, getCoordinates } from "@src/helpers/map";
import { getHoverdStudioId, getStudiosList } from "@src/store/studio/selectors";

import { Markers } from "./Markers";
import { MapContainer, NavigationControlWrapper } from "./elements";

export const Map: React.FC = () => {
  const hoveredItemId: string | null = useSelector(getHoverdStudioId);
  const studiosList: IStudio[] = useSelector(getStudiosList);

  const coordinates = getCoordinates(studiosList);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    // TODO change this depend on chosen city in filters
    latitude: countCoordinateAverage(coordinates, ECoordinateName.latitude),
    longitude: countCoordinateAverage(coordinates, ECoordinateName.longitude),
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
        <Markers dataList={studiosList} hoveredItemId={hoveredItemId} />
        <NavigationControlWrapper>
          <NavigationControl showCompass={false} />
        </NavigationControlWrapper>
      </ReactMapGL>
    </MapContainer>
  );
};
