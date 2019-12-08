import React, { Suspense, lazy, useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import { Container } from "./elements";
import { useDispatch } from "@src/hooks/dispatch";
import { setOpenedStudio } from "@src/store/studios/actions";
import Loading from "@src/components/Loading";

const AboutScreen = lazy(() => import("@src/screens/About"));
const ContactScreen = lazy(() => import("@src/screens/Contact"));
const CatalogScreen = lazy(() => import("@src/screens/Catalog"));

export const RouterScreen: React.FC = () => {
  const location = useLocation();

  const dispatchOpenedStudio = useDispatch(setOpenedStudio);

  useEffect(() => {
    switch (location.pathname) {
      case "/catalog":
        dispatchOpenedStudio();
        break;
    }
  }, [location]);

  return (
    <Suspense fallback={<Loading />}>
      <Container as="main">
        <Switch>
          <Route path="/about" component={AboutScreen} exact />
          <Route path="/contact" component={ContactScreen} exact />
          <Route path="/catalog" component={CatalogScreen} />
          <Redirect from="/*" to="/catalog" />
        </Switch>
      </Container>
    </Suspense>
  );
};
