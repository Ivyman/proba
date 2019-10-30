import { lazy, FunctionComponent } from "react";

import { IPath } from "@src/types/path";

const AboutScreen = lazy(() => import("@src/screens/About"));
const ContactScreen = lazy(() => import("@src/screens/Contact"));
const CatalogScreen = lazy(() => import("@src/screens/Catalog"));

export const generatePaths = (
  label: string,
  path: string,
  exact: boolean,
  component: FunctionComponent,
): IPath => ({
  label,
  path,
  exact,
  component,
});

const paths = {
  app: {
    paths: [
      generatePaths("O nas", "/about", true, AboutScreen),
      generatePaths("Kontakt", "/contact", true, ContactScreen),
      generatePaths("Katalog", "/catalog", true, CatalogScreen),
    ],
  },
};

export default paths;
