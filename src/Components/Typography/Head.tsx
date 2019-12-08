import styled from "@src/styles";

import { IHeadSize } from "@src/types/theme";

export const Head = styled.h1<{ as: IHeadSize }>`
  ${({ as, theme: { fontSizes } }) => {
    switch (as) {
      case "h1":
        return `font-size: ${fontSizes.one}`;
      case "h2":
        return `font-size: ${fontSizes.two}`;
      case "h3":
        return `font-size: ${fontSizes.three}`;
      case "h4":
        return `font-size: ${fontSizes.four}`;
      case "h5":
        return `font-size: ${fontSizes.five}`;
      case "h6":
        return `font-size: ${fontSizes.six}`;
    }
  }}
`;
