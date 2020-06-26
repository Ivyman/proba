import React, { useCallback, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "@src/hooks/dispatch";
import { getSidebarStatus } from "@src/store/app/selectors";
import { switchSidebar } from "@src/store/app/actions";
import { fetchFilters } from "@src/store/filters/actions";
import { ScreensRouter } from "@src/routing/ScreensRouter";

import { Box } from "@material-ui/core";
import Sidebar from "@src/components/Sidebar";
import Header from "@src/components/Header";

const App: React.FC = () => {
    const sidebarStatus: boolean = useSelector(getSidebarStatus);

    const dispatchFilters = useDispatch<typeof fetchFilters, undefined>(
        fetchFilters,
    );
    const dispatchSwitchSidebar = useDispatch<typeof switchSidebar, undefined>(
        switchSidebar,
    );

    const hadleSidebarSwith = useCallback(() => {
        dispatchSwitchSidebar();
    }, [dispatchSwitchSidebar]);

    useEffect(() => dispatchFilters(), [dispatchFilters]);

    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Header onSwitchSidebar={hadleSidebarSwith} />

                <ScreensRouter />

                <Sidebar
                    sidebarStatus={sidebarStatus}
                    onClose={dispatchSwitchSidebar}
                />
            </BrowserRouter>
        </Box>
    );
};

export default App;
