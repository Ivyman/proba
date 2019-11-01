import styled from "@src/styles";
import { Link } from "react-router-dom";

export const Wrapper = styled.li`
  &:hover {
    background: gray;
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
`;

export const Thumbnail = styled.img``;
