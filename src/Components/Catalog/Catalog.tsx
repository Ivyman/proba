import React from "react";

import { IStudio } from "@src/types/studio";

import CatalagItem from "@src/components/CatalagItem";
import { Wrapper } from "./elements";

export const Catalog: React.FC<{ studiosList: IStudio[] }> = ({
  studiosList,
}) => (
  <Wrapper>
    {studiosList.length ? (
      studiosList.map(({ id, logo, name, address }) => (
        <CatalagItem key={id} thumbnail={logo} name={name} address={address} />
      ))
    ) : (
      <>Studios not found...</>
    )}
  </Wrapper>
);
