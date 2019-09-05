import React from "react";

import Catalog from "@src/containers/Catalog";

type TCatalogScreen = React.FunctionComponent<{}>;

export const CatalogScreen: TCatalogScreen = () => (
  <>
    Catalog Screen
    <br />
    <Catalog />
  </>
);

export default CatalogScreen;
