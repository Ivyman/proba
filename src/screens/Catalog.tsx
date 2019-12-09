import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { IFiltersData, IFilters } from "@src/types/filters";
import { EApiStatuses } from "@src/types/api";
import { fetchStudios } from "@src/store/studios/actions";
import { fetchFilters } from "@src/store/filters/actions";
import { getStudiosApiStatus } from "@src/store/studios/selectors";
import { getFilters } from "@src/store/filters/selectors";
import { RouterCatalog } from "@src/routing/RouterCatalog";
import { useDispatch } from "@src/hooks/dispatch";
import CatalogFrame from "@src/components/CatalogFrame";
import Filters from "@src/components/Filters";
import Screen from "@src/components/Screen";
import Map from "@src/containers/Map";

const CatalogScreen: React.FC = () => {
  const dispatchStudios = useDispatch(fetchStudios);
  const dispatchFilters = useDispatch(fetchFilters);

  const studiosApiStatus: EApiStatuses = useSelector(getStudiosApiStatus);
  const fields: IFilters = useSelector(getFilters);

  const handleFiltersChange = (filtersData: IFiltersData) => {
    dispatchStudios({
      search: filtersData.search,
      city: filtersData.city,
    });
  };

  useEffect(() => dispatchFilters(), []);

  useEffect(() => {
    if (fields.cities.length) {
      dispatchStudios({ city: fields.cities[0].key });
    }
  }, [fields]);

  return (
    <Screen apiStatus={studiosApiStatus}>
      <Filters onFiltersChange={handleFiltersChange} fields={fields} />
      <CatalogFrame>
        <RouterCatalog />
        <Map />
      </CatalogFrame>
    </Screen>
  );
};

export default CatalogScreen;
