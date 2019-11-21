import React from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "@src/hooks/dispatch";
import { IStudio } from "@src/types/studio";
import { setHoveredStudio, setOpenedStudio } from "@src/store/studios/actions";
import { getStudios } from "@src/store/studios/selectors";

import CatalogItem from "@src/components/CatalogItem";
import { Wrapper } from "./elements";

export const Catalog: React.FC = () => {
  const studios: IStudio[] = useSelector(getStudios);
  const setHoveredStudioItem = useDispatch(setHoveredStudio);
  const setOpenedStudioItem = useDispatch(setOpenedStudio);

  return (
    <Wrapper>
      {studios.length ? (
        studios.map(studio => (
          <CatalogItem
            key={studio.id}
            studioData={studio}
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
