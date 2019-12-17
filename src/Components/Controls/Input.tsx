import React from "react";

import styled from "@src/styles";

export const Input = styled.input`
  border-radius: 0.5em;
  background-color: ${({ theme: { palette } }) => palette.grayLight};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.six};
  border: none;
  padding: ${({ theme: { common } }) =>
    `${common.space * 0.8}em ${common.space}em`};
`;
