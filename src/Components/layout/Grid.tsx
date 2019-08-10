import styled from "@src/styles";
import * as mixins from "@src/styles/mixins";
import { EBreakpoints } from "@src/types/theme";

const { breakpoint } = mixins;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Column = styled.div<{
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}>`
  ${({ xs }) =>
    xs && breakpoint(EBreakpoints.xs)(`width: ${(xs / 12) * 100}%;`)}
  ${({ sm }) =>
    sm && breakpoint(EBreakpoints.sm)(`width: ${(sm / 12) * 100}%;`)}
  ${({ md }) =>
    md && breakpoint(EBreakpoints.md)(`width: ${(md / 12) * 100}%;`)}
  ${({ lg }) =>
    lg && breakpoint(EBreakpoints.lg)(`width: ${(lg / 12) * 100}%;`)}
`;
