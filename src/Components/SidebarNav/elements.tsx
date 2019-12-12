import styled from "@src/styles";

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.gray};
    font-weight: bold;
    &:hover {
      color: ${({ theme }) => theme.palette.turkus};
    }
  }
`;
