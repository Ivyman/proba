import styled from "@src/styles";
import * as mixins from "@src/styles/mixins";
import { EBreakpoints } from "@src/types/theme";

const { breakpoint } = mixins;

export const Container = styled.section`
  padding: 10px;
  ${breakpoint(EBreakpoints.xs)(`padding: 15px`)}
  ${breakpoint(EBreakpoints.md)(`padding: 20px`)}
`;
