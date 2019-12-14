import styled from "@src/styles";

import Typography from "@src/components/Typography";

const { Text: TextParagraph } = Typography;

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  a {
    display: flex;
    padding: ${({ theme }) =>
      `${theme.common.space * 0.75}em  ${theme.common.space * 1.5}em`};
    text-decoration: none;
    color: ${({ theme }) => theme.palette.gray};
    font-size: ${({ theme }) => theme.fontSizes.five};
    &:hover {
      color: ${({ theme }) => theme.palette.turkus};
      svg {
        fill: ${({ theme }) => theme.palette.turkus};
      }
    }
  }
`;

export const Text = styled(TextParagraph)`
  align-self: center;
  padding-left: ${({ theme }) => `${theme.common.space * 1.5}em`};
`;
