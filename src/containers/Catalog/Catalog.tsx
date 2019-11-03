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
  const setHoveredStudioItem = useDispatch(setHoveredStudio);
  const setOpenedStudioItem = useDispatch(setOpenedStudio);

  return (
    <Wrapper>
      {studiosList.length ? (
        studiosList.map(studioData => (
          <CatalogItem
            key={studioData.id}
            studioData={studioData}
            onHoveredStudio={setHoveredStudioItem}
            onOpenStudio={setOpenedStudioItem}
          />
        ))
      ) : (
        <>Studios not found...</>
      )}
    </Wrapper>
  );
};
