import styled from "@src/styles";

import { CloseIcon } from "@src/assets/icons";

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.white};
  width: 30vw;
  height: 100vh;
  position: absolute;
  top: 90px;
  right: 0;
  border: 2px solid gray;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;
