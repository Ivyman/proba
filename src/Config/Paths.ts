import { lazy } from "react";

import { IPath } from "@src/types/paths";

const AboutScreen = lazy(() => import("@src/Screens/About"));
const ContactScreen = lazy(() => import("@src/Screens/Contact"));
const CatalogScreen = lazy(() => import("@src/Screens/Catalog"));

export const paths: IPath[] = [
  {
    label: "Katalog",
    path: "/",
    exact: true,
    component: CatalogScreen,
  },
  {
    label: "O nas",
    path: "/about",
    exact: true,
    component: AboutScreen,
  },
  {
    label: "Kontakt",
    path: "/contact",
    exact: true,
    component: ContactScreen,
  },
];
