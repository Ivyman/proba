import { FlattenInterpolation, ThemeProps } from "styled-components";

export type StyleMixin = FlattenInterpolation<ThemeProps<any>>;

export enum EBreakpoints {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
}

export type IHeadSize = "h1" | "h2" | "h3" | "h4";

export type IBreakpoints = { [key in keyof typeof EBreakpoints]: string };

export interface IPalette {
  main: string;
  white: string;
}

export default interface ITheme {
  palette: IPalette;
  breakpoints: IBreakpoints;
}
