import styled from "@src/styles";
import { Link as RouterLink } from "react-router-dom";

export const Wrapper = styled.li`
  &:hover {
    background: gray;
    cursor: pointer;
  }
`;

export const Link = styled(RouterLink)`
  display: block;
`;

export const Thumbnail = styled.img``;
