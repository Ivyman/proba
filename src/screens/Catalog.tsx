import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { IFiltersData } from "@src/types/filters";
import { EApiStatuses } from "@src/types/api";
import { fetchStudios } from "@src/store/studios/actions";
import { getStudiosApiStatus } from "@src/store/studios/selectors";
import { reduceUncheckedCities } from "@src/helpers/filters";
import { RouterCatalog } from "@src/routing/RouterCatalog";
import { useDispatch } from "@src/hooks/dispatch";

import Filters from "@src/components/Filters";
import Screen from "@src/components/Screen";
import Map from "@src/containers/Map";

const CatalogScreen: React.FC = () => {
  const dispatchFetchStudios = useDispatch(fetchStudios);
  const studiosApiStatus: EApiStatuses = useSelector(getStudiosApiStatus);

  const handleFiltersChange = (filtersData: IFiltersData) => {
    fetchStudios({
      search: filtersData.search,
      city: reduceUncheckedCities(filtersData.city),
    });
  };

  useEffect(() => {
    dispatchFetchStudios();
  }, [dispatchFetchStudios]);

  return (
    <Screen apiStatus={studiosApiStatus}>
      <Filters onFiltersChange={handleFiltersChange} />
      <RouterCatalog />
      <Map />
    </Screen>
  );
};

export default CatalogScreen;
