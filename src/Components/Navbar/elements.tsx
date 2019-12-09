import styled from "@src/styles";

export const Wrapper = styled.nav`
  display: flex;
  margin-right: 30px;
  a {
    margin-right: 20px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
