import React, { useCallback } from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import GlobalStyle from "@src/styles/GlobalStyle";
import { getSidebarStatus } from "@src/store/app/selectors";
import { switchSidebar } from "@src/store/app/actions";
import { ThemeProvider, theme } from "@src/styles";
import { RouterScreen } from "@src/routing/RouterScreen";

import Header from "@src/components/Header";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const sidebarStatus = useSelector(getSidebarStatus);

  const hadleSidebarSwith = useCallback(() => {
    dispatch(switchSidebar());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header
            showSidebar={sidebarStatus}
            onSwitchSidebar={hadleSidebarSwith}
          />
          <RouterScreen />
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
};

export default App;
