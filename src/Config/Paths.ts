import { lazy } from "react";

import { IPath } from "@src/types/paths";

const AboutScreen = lazy(() => import("@src/Screens/About"));
const ContactScreen = lazy(() => import("@src/Screens/Contact"));
const CatalogScreen = lazy(() => import("@src/Screens/Catalog"));

export const paths: IPath[] = [
  {
    label: "Catalog",
    path: "/",
    exact: true,
    component: CatalogScreen,
  },
  {
    label: "About",
    path: "/about",
    exact: true,
    component: AboutScreen,
  },
  {
    label: "Contact",
    path: "/contact",
    exact: true,
    component: ContactScreen,
  },
];
