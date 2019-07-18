import { FlattenInterpolation, ThemeProps } from "styled-components";

export type StyleMixin = FlattenInterpolation<ThemeProps<any>>;

export default interface ITheme {
  palette: {
    main: string;
  };
}
