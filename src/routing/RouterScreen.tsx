import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { StyledContainer } from "./elements";

const AboutScreen = lazy(() => import("@src/screens/About"));
const ContactScreen = lazy(() => import("@src/screens/Contact"));
const CatalogScreen = lazy(() => import("@src/screens/Catalog"));

export const RouterScreen: React.FC = () => (
  <Suspense fallback={<>Loading...</>}>
    <StyledContainer as="main">
      <Switch>
        <Route path="/about" component={AboutScreen} exact />
        <Route path="/contact" component={ContactScreen} />
        <Route path="/catalog" component={CatalogScreen} exact />
        <Redirect from="/*" to="/catalog" />
      </Switch>
    </StyledContainer>
  </Suspense>
);
