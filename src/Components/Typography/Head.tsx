import styled from "@src/styles";

import { IHeadSize } from "@src/types/theme";

export const Head = styled.h1<{ as: IHeadSize }>`
  ${({ as }) => {
    switch (as) {
      case "h1":
        return "font-size: 2.5rem";
      case "h2":
        return "font-size: 2rem";
      case "h3":
        return "font-size: 1.75rem";
      case "h4":
        return "font-size: 1.5rem";
      case "h5":
        return "font-size: 1.25rem";
      case "h6":
        return "font-size: 1rem";
    }
  }}
`;
