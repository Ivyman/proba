import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { populateStudios } from "@src/store/studio/actions";
import {
  getStudiosList,
  getPopulatedStatus,
} from "@src/store/studio/selectors";
import { IFiltersData } from "@src/types/studio";
import { reduceUncheckedCities } from "@src/helpers/filters";

import Filters from "@src/components/Filters";
import Screen from "../components/Screen";
import Catalog from "@src/components/Catalog";
import Map from "@src/components/Map";

const CatalogScreen: React.FC = () => {
  const dispatch = useDispatch();

  const studiosList = useSelector(getStudiosList);
  const populatedStatus = useSelector(getPopulatedStatus);

  const callPopulateStudios = useCallback(
    (filtersData?: any) => {
      dispatch(populateStudios(filtersData));
    },
    [dispatch],
  );

  const handleFiltersChange = (filtersData: IFiltersData) => {
    callPopulateStudios({
      query: filtersData.query,
      city: reduceUncheckedCities(filtersData.city),
    });
  };

  useEffect(() => {
    callPopulateStudios();
  }, []);

  return (
    <Screen populatedStatus={populatedStatus}>
      <Filters onFiltersChange={handleFiltersChange} />
      <Catalog studiosList={studiosList} />
      <Map studiosList={studiosList} />
    </Screen>
  );
};

export default CatalogScreen;
