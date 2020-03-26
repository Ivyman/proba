import React, { Suspense, lazy } from "react";
// import React, { Suspense, lazy, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import { Route, Switch, Redirect, useLocation } from "react-router-dom";
// import { useDispatch } from "@src/hooks/dispatch";
// import { setOpenedStudio } from "@src/store/studios/actions";
import * as ROUTERS from "@src/config/router";

import FullpageThrobber from "@src/components/common/FullpageThrobber";

const AboutScreen = lazy(() => import("@src/screens/About"));
const ContactScreen = lazy(() => import("@src/screens/Contact"));
const CatalogScreen = lazy(() => import("@src/screens/Catalog"));
const TermsScreen = lazy(() => import("@src/screens/Terms"));
const PolicyScreen = lazy(() => import("@src/screens/Policy"));

export const ScreensRouter: React.FC = () => {
    return (
        <Suspense fallback={<FullpageThrobber />}>
            <Switch>
                <Route path={ROUTERS.ABOUT} component={AboutScreen} exact />
                <Route path={ROUTERS.CONTACT} component={ContactScreen} exact />
                <Route path={ROUTERS.TERMS} component={TermsScreen} exact />
                <Route path={ROUTERS.POLICY} component={PolicyScreen} exact />
                <Route path={ROUTERS.CATALOG} component={CatalogScreen} />
                <Redirect from="/*" to={ROUTERS.CATALOG} />
            </Switch>
        </Suspense>
    );
};
