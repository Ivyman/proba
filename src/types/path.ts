export interface IPath {
    label: string;
    path: string;
}

export interface IPathWithIcon extends IPath {
    icon: JSX.Element;
}
