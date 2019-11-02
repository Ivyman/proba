import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { populateStudios, setHoveredStudio, setOpenedStudio } from "@src/store/studio/actions";
import { getStudiosList, getPopulatedStatus, getOpenedStudio } from "@src/store/studio/selectors";
import { IFiltersData } from "@src/types/studio";
import { reduceUncheckedCities } from "@src/helpers/filters";
import { RouterCatalog } from "@src/routing/RouterCatalog";
import { useDispatch } from "@src/hooks/dispatch";

import Filters from "@src/components/Filters";
import Screen from "../components/Screen";
import Map from "@src/components/Map";

const CatalogScreen: React.FC = () => {
  const studiosList = useSelector(getStudiosList);
  const populatedStatus = useSelector(getPopulatedStatus);
  const openedStudio = useSelector(getOpenedStudio);

  const callPopulateStudios = useDispatch(populateStudios);
  const setHoveredItem = useDispatch(setHoveredStudio);
  const setOpenedItem = useDispatch(setOpenedStudio);

  const handleFiltersChange = (filtersData: IFiltersData) => {
    callPopulateStudios({
      query: filtersData.query,
      city: reduceUncheckedCities(filtersData.city),
    });
  };

  useEffect(() => {
    callPopulateStudios();
  }, [callPopulateStudios]);

  return (
    <Screen populatedStatus={populatedStatus}>
      <Filters onFiltersChange={handleFiltersChange} />
      <RouterCatalog
        studiosList={studiosList}
        openedStudio={openedStudio}
        onHoverStudio={setHoveredItem}
        onOpenStudio={setOpenedItem}
      />
      <Map studiosList={studiosList} />
    </Screen>
  );
};

export default CatalogScreen;
