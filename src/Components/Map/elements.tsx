import styled from "@src/styles";
import { Popup } from "react-map-gl";

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

export const MapContainer = styled.div`
  background-color: gray;
  height: 100vh;
  width: 50%;
`;

export const MarkerWrapper = styled.div``;

export const StyledPopup = styled(Popup)`
  z-index: 1;
`;
