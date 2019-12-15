import styled from "@src/styles";

import Layout from "@src/components/Layout";

export const Wrapper = styled(Layout.Container)`
  display: flex;
  border-bottom: 1px solid ${({ theme: { palette } }) => palette.grayLight};
`;

export const Cities = styled.div`
  display: flex;
`;

export const CityBox = styled.div`
  display: flex;
  margin-right: ${({ theme: { common } }) => `${common.space * 0.75}em`}
  label {
    cursor: pointer;
    color: ${({ theme: { palette } }) => palette.black};
    border-radius: ${({ theme: { common } }) => `${common.space * 1.5}em`}
    border: 1px solid ${({ theme: { palette } }) => palette.gray};
    padding: ${({ theme: { common } }) =>
      `${common.space * 0.75}em ${common.space * 1.25}em`};
  }
  input {
    display: none;
    &:checked + label {
      background-color: ${({ theme: { palette } }) => palette.grayLight};
      color: ${({ theme: { palette } }) => palette.black}
    }
  }
`;
