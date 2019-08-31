import { lazy } from "react";

import { IPath } from "@src/types/paths";

const AboutScreen = lazy(() => import("@src/screens/About"));
const ContactScreen = lazy(() => import("@src/screens/Contact"));
const CatalogScreen = lazy(() => import("@src/screens/Catalog"));

const mainPaths: IPath[] = [
  {
    label: "O nas",
    path: "/about",
    exact: true,
    component: AboutScreen,
  },
  {
    label: "Katalog",
    path: "/",
    exact: true,
    component: CatalogScreen,
  },
  {
    label: "Kontakt",
    path: "/contact",
    exact: true,
    component: ContactScreen,
  },
];

export { mainPaths };
