import React, { useCallback, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSidebarStatus } from "@store/app/selectors";
import { switchSidebar } from "@store/app/actions";
import { fetchFilters } from "@store/filters/actions";
import { ScreensRouter } from "@routing/ScreensRouter";
import useDispatch from "@hooks/useDispatch";

import { Box } from "@material-ui/core";
import Sidebar from "@components/dump/Sidebar";
import Header from "@components/dump/Header";

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
