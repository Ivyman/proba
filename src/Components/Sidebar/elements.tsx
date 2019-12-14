import styled from "@src/styles";

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.white};
  max-width: 100vw;
  width: 350px;
  height: 100vh;
  position: absolute;
  padding: ${({ theme }) => `${theme.common.space}em`}
    ${({ theme }) => `${theme.common.space * 1.5}em`};
  top: 90px;
  right: 0;
  top: 0;
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

export const CloseIconWrapper = styled.div`
  cursor: pointer;
`;

export const Header = styled.div``;

export const Body = styled.div`
  flex-grow: 1;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.palette.grayLight};
  padding-top: ${({ theme }) => `${theme.common.space}em`};
  margin-top: ${({ theme }) => `${theme.common.space}em`};
`;
