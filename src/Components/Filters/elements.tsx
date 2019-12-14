import styled from "@src/styles";

import Layout from "@src/components/Layout";

export const Wrapper = styled(Layout.Container)`
  display: flex;
  border-bottom: 1px solid ${({ theme: { palette } }) => palette.grayLight};
`;

export const Cities = styled.fieldset``;
