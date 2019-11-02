import React from "react";

import { IStudio } from "@src/types/studio";

import CatalagItem from "@src/components/CatalagItem";
import { Wrapper } from "./elements";

export const Catalog: React.FC<{
  studiosList: IStudio[];
  onHoverItem: (itemId: string) => void;
  onOpenItem: (item: IStudio | null) => void;
}> = ({ studiosList, onHoverItem, onOpenItem }) => (
  <Wrapper>
    {studiosList.length ? (
      studiosList.map(itemData => (
        <CatalagItem key={itemData.id} itemData={itemData} onHoverItem={onHoverItem} onOpenItem={onOpenItem} />
      ))
    ) : (
      <>Studios not found...</>
    )}
  </Wrapper>
);
