import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import * as ROUTERS from "@config/router";

import FullpageThrobber from "@components/dump/common/FullpageThrobber";

const AboutScreen = lazy(() => import("@screens/About"));
const ContactScreen = lazy(() => import("@screens/Contact"));
const CatalogScreen = lazy(() => import("@screens/Catalog"));
const TermsScreen = lazy(() => import("@screens/Terms"));
const PolicyScreen = lazy(() => import("@screens/Policy"));
const SignInScreen = lazy(() => import("@screens/SignIn"));
const SignUpScreen = lazy(() => import("@screens/SignUp"));

export const ScreensRouter: React.FC = () => {
    return (
        <Suspense fallback={<FullpageThrobber />}>
            <Switch>
                <Route path={ROUTERS.ABOUT} component={AboutScreen} exact />
                <Route path={ROUTERS.CONTACT} component={ContactScreen} exact />
                <Route path={ROUTERS.TERMS} component={TermsScreen} exact />
                <Route path={ROUTERS.POLICY} component={PolicyScreen} exact />
                <Route path={ROUTERS.SIGNUP} component={SignUpScreen} />
                <Route path={ROUTERS.SIGNIN} component={SignInScreen} />
                <Route path={ROUTERS.CATALOG} component={CatalogScreen} />
                <Redirect from="/*" to={ROUTERS.CATALOG} />
            </Switch>
        </Suspense>
    );
};
