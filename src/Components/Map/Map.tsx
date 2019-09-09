import React, { useState } from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";

import { GlMap } from "@src/config/Confing";
import styled from "@src/styles";

type IMapComponent = React.FunctionComponent<{}>;

export const Map: IMapComponent = ({}) => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
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
        <NavigationControlWrapper>
          <NavigationControl showCompass={false} />
        </NavigationControlWrapper>
      </ReactMapGL>
    </Container>
  );
};

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
