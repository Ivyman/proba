import breakpoints from "./theme/breakpoints";
import { EBreakpoints } from "@src/types/theme";

export const breakpoint = (bp: EBreakpoints) => (styles: any) => `
  @media (min-width: ${breakpoints[bp]}) {
    ${styles}
  }
`;
