import { IconTypes } from "@src/types/icons";

export interface IPath {
  label: string;
  path: string;
}

export interface IPathWithIcon extends IPath {
  icon: IconTypes;
}
