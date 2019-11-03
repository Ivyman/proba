import React from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "@src/hooks/dispatch";
import { IStudio } from "@src/types/studio";
import { setHoveredStudio, setOpenedStudio } from "@src/store/studio/actions";
import { getStudiosList } from "@src/store/studio/selectors";

import CatalogItem from "@src/components/CatalogItem";
import { Wrapper } from "./elements";

export const Catalog: React.FC = () => {
  const studiosList: IStudio[] = useSelector(getStudiosList);
  const setHoveredItem = useDispatch(setHoveredStudio);
  const setOpenedItem = useDispatch(setOpenedStudio);

  return (
    <Wrapper>
      {studiosList.length ? (
        studiosList.map(itemData => (
          <CatalogItem
            key={itemData.id}
            itemData={itemData}
            onHoveredItem={setHoveredItem}
            onOpenItem={setOpenedItem}
          />
        ))
      ) : (
        <>Studios not found...</>
      )}
    </Wrapper>
  );
};
