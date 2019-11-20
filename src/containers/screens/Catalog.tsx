import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { IFiltersData } from "@src/types/studio";
import { EApiStatuses } from "@src/types/api";
import { fetchStudios } from "@src/store/studio/actions";
import { getApiStatus } from "@src/store/studio/selectors";
import { reduceUncheckedCities } from "@src/helpers/filters";
import { RouterCatalog } from "@src/routing/RouterCatalog";
import { useDispatch } from "@src/hooks/dispatch";

import Filters from "@src/components/Filters";
import Screen from "@src/components/Screen";
import Map from "@src/containers/Map";

const CatalogScreen: React.FC = () => {
  const apiStatus: EApiStatuses = useSelector(getApiStatus);
  const dispatchFetchStudios = useDispatch(fetchStudios);

  const handleFiltersChange = (filtersData: IFiltersData) => {
    fetchStudios({
      query: filtersData.query,
      city: reduceUncheckedCities(filtersData.city),
    });
  };

  useEffect(() => {
    dispatchFetchStudios();
  }, [dispatchFetchStudios]);

  return (
    <Screen populatedStatus={apiStatus}>
      <Filters onFiltersChange={handleFiltersChange} />
      <RouterCatalog />
      <Map />
    </Screen>
  );
};

export default CatalogScreen;
