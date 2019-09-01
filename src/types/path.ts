import { FunctionComponent } from "react";

export interface IPath {
  label: string;
  path: string;
  exact: boolean;
  component: FunctionComponent;
}
