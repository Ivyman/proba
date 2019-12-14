import { IconTypes } from "@src/icons";

export interface IPath {
  label: string;
  path: string;
}

export interface IPathWithIcon extends IPath {
  icon: IconTypes;
}
