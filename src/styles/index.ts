import * as styledComponents from "styled-components";

import ITheme from "../types/theme";
import theme from "./theme";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withTheme,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;

export { css, createGlobalStyle, keyframes, ThemeProvider, withTheme, theme };
export default styled;
