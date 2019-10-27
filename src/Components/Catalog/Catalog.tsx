import React from "react";

import { IStudio } from "@src/types/studio";

import CatalagItem from "@src/components/CatalagItem";
import { Wrapper } from "./elements";

export const Catalog: React.FC<{
  studiosList: IStudio[];
  onHoverItem: (itemId: string) => void;
}> = ({ studiosList, onHoverItem }) => (
  <Wrapper>
    {studiosList.length ? (
      studiosList.map(({ id, logo, name, address }) => (
        <CatalagItem
          id={id}
          key={id}
          thumbnail={logo}
          name={name}
          address={address}
          onHoverItem={onHoverItem}
        />
      ))
    ) : (
      <>Studios not found...</>
    )}
  </Wrapper>
);
