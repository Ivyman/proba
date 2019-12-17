import styled from "@src/styles";

import Controls from "@src/components/Controls";
import Layout from "@src/components/Layout";

const { Input } = Controls;

export const Wrapper = styled(Layout.Container)`
  display: flex;
  position: relative;
  z-index: 1;
  justify-content: space-between;
  box-shadow: ${({ theme: { common } }) => common.shadowBox};
`;

export const Cities = styled.div`
  display: flex;
  align-items: center;
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
      `${common.space * 0.5}em ${common.space}em`};
  }
  input {
    display: none;
    &:checked + label {
      border-color: ${({ theme: { palette } }) => palette.black};
      color: ${({ theme: { palette } }) => palette.black}
    }
  }
`;

export const Search = styled.div`
  width: 40rem;
  ${Input} {
    width: 100%;
  }
`;
