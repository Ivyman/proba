import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Route, useRouteMatch, Switch } from "react-router-dom";

import { populateStudios } from "@src/store/studio/actions";
import { setHoveredStudio } from "@src/store/app/actions";
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
import ItemBox from "@src/components/ItemBox";

const CatalogScreen: React.FC = () => {
  const studiosList = useSelector(getStudiosList);
  const populatedStatus = useSelector(getPopulatedStatus);

  const callPopulateStudios = useDispatch(populateStudios);
  const setHoveredItem = useDispatch(setHoveredStudio);

  const { path, url } = useRouteMatch();

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
      <Switch>
        <Route path={`${path}/:studioId`}>
          <ItemBox />
        </Route>
        <Route path={path}>
          <Catalog studiosList={studiosList} onHoverItem={setHoveredItem} />
        </Route>
      </Switch>
      <Map studiosList={studiosList} />
    </Screen>
  );
};

export default CatalogScreen;
