import React from "react";

import { IStudio } from "@src/types/studio";

import CatalagItem from "@src/components/CatalagItem";

type TCatalogComponent = React.FunctionComponent<{ studiosList: IStudio[] }>;

export const Catalog: TCatalogComponent = ({ studiosList }) => (
  <>
    {studiosList.length ? (
      studiosList.map(({ id, logo, name, address }) => (
        <CatalagItem key={id} thumbnail={logo} name={name} address={address} />
      ))
    ) : (
      <>Studios not found...</>
    )}
  </>
);
