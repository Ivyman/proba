import styled from "@src/styles";
import { Popup as Tooltip } from "react-map-gl";

export const Wrapper = styled.div<{ isOpened?: boolean }>`
  ${({ isOpened }) =>
    isOpened
      ? `z-index: 1; position: relative; ${MarkerInner} { background: blue; }`
      : ""}
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

export const MarkerInner = styled.div`
  background: gray;
  cursor: pointer;
  color: white;
  padding: 5px;
`;

export const MarkerTitle = styled.h5`
  font-weight: bold;
  margin: 5px 0;
`;

export const Popup = styled(Tooltip)`
  z-index: 1;
`;
