import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { IStudio, IFiltersData } from "@src/types/studio";
import { EApiStatuses } from "@src/types/api";
import { populateStudios } from "@src/store/studio/actions";
import { getPopulatedStatus, getOpenedStudio } from "@src/store/studio/selectors";
import { reduceUncheckedCities } from "@src/helpers/filters";
import { RouterCatalog } from "@src/routing/RouterCatalog";
import { useDispatch } from "@src/hooks/dispatch";

import Filters from "@src/components/Filters";
import Screen from "@src/components/Screen";
import Map from "@src/containers/Map";

const CatalogScreen: React.FC = () => {
  const populatedStatus: EApiStatuses = useSelector(getPopulatedStatus);
  const openedStudio: IStudio | null = useSelector(getOpenedStudio);

  const callPopulateStudios = useDispatch(populateStudios);

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
      <RouterCatalog openedStudio={openedStudio} />
      <Map />
    </Screen>
  );
};

export default CatalogScreen;
