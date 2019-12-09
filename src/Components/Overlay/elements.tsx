import styled from "@src/styles";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(24, 24, 24, 0.5);
  transition: opacity 0.2s ease-in-out;
  &.overlay-enter {
    opacity: 0;
  }
  &.overlay-enter-active {
    opacity: 1;
  }
  &.overlay-exit {
    opacity: 1;
  }
  &.overlay-exit-active {
    opacity: 0;
  }
`;
