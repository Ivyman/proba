import React, { useCallback } from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import { useDispatch } from "@src/hooks/dispatch";
import { getSidebarStatus } from "@src/store/app/selectors";
import { switchSidebar } from "@src/store/app/actions";
import { ThemeProvider, theme } from "@src/styles";
import { RouterScreens } from "@src/routing/RouterScreens";
import GlobalStyle from "@src/styles/GlobalStyle";
import Sidebar from "@src/components/Sidebar";
import Header from "@src/components/Header";
import Navbar from "@src/components/Navbar";

const App: React.FC = () => {
  const dispatchSwitchSidebar = useDispatch(switchSidebar);
  const sidebarStatus: boolean = useSelector(getSidebarStatus);
  const sidebarLinks = [
    { path: "/catalog", label: "Katalog" },
    { path: "/contact", label: "Kontakt" },
  ];

  const hadleSidebarSwith = useCallback(() => {
    dispatchSwitchSidebar();
  }, [dispatchSwitchSidebar]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header onSwitchSidebar={hadleSidebarSwith} />
          <RouterScreens />
          {sidebarStatus && (
            <Sidebar onClose={hadleSidebarSwith}>
              <Navbar items={sidebarLinks} />
            </Sidebar>
          )}
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
};

export default App;
