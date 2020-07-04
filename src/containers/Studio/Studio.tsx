import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "@src/hooks/dispatch";
import { useHistory } from "react-router-dom";
import { IStudio } from "@src/types/studio";
import { getOpenedStudio } from "@src/store/studios/selectors";
import { setOpenedStudio } from "@src/store/studios/actions";
import * as ROUTERS from "@src/config/router";

import { Card, Box } from "@material-ui/core";
import StudioBox from "@src/components/StudioBox";

export const Studio: React.FC = () => {
    const history = useHistory();

    const openedStudio: IStudio | undefined = useSelector(getOpenedStudio);

    const dispatchOpenedStudio = useDispatch<typeof setOpenedStudio, string>(
        setOpenedStudio,
    );

    const handleGoBack = () => {
        history.push(ROUTERS.CATALOG);
        dispatchOpenedStudio();
    };

    return (
        <Box py={1.5} pr={1.5} pl={3}>
            <Card>
                <StudioBox
                    openedStudio={openedStudio}
                    onGoBack={handleGoBack}
                />
            </Card>
        </Box>
    );
};
