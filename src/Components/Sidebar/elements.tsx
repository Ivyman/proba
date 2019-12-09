import styled from "@src/styles";

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.white};
  width: 30vw;
  height: 100vh;
  position: absolute;
  top: 90px;
  right: 0;
  top: 0;
  border: 2px solid gray;
  z-index: 1;
  transition: transform 0.2s ease-in-out;
  &.sidebar-enter {
    transform: translateX(100%);
  }
  &.sidebar-enter-active {
    transform: translateX(0);
  }
  &.sidebar-exit {
    transform: translateX(0);
  }
  &.sidebar-exit-active {
    transform: translateX(100%);
  }
`;
