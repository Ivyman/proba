import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { populateStudios } from "@src/store/studio/actions";
import {
  getStudiosList,
  getPopulatedStatus,
} from "@src/store/studio/selectors";
import { IFiltersData } from "@src/types/studio";
import { reduceUncheckedCities } from "@src/helpers/filters";
import { useDispatch } from "@src/hooks/dispatch";

import Filters from "@src/components/Filters";
import Screen from "../components/Screen";
import Catalog from "@src/components/Catalog";
import Map from "@src/components/Map";

const CatalogScreen: React.FC = () => {
  const studiosList = useSelector(getStudiosList);
  const populatedStatus = useSelector(getPopulatedStatus);

  const [hoveredItemId, setHoveredItemId] = useState("");

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
      <Catalog studiosList={studiosList} onHoverItem={setHoveredItemId} />
      <Map studiosList={studiosList} hoverdItemId={hoveredItemId} />
    </Screen>
  );
};

export default CatalogScreen;
