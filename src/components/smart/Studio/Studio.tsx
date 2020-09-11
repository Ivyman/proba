import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { IStudio } from "@typing/studio";
import { getOpenedStudio } from "@store/studios/selectors";
import { setOpenedStudio } from "@store/studios/actions";
import useDispatch from "@hooks/useDispatch";
import * as ROUTERS from "@config/router";

import { Card, Box } from "@material-ui/core";
import StudioBox from "@components/dump/StudioBox";

export const Studio: React.FC = () => {
    const history = useHistory();
    const { studioId } = useParams<{ studioId: string }>();

    const openedStudio: IStudio | undefined = useSelector(getOpenedStudio);

    const dispatchOpenedStudio = useDispatch<typeof setOpenedStudio, string>(
        setOpenedStudio,
    );

    const goToCatalog = () => history.push(ROUTERS.CATALOG);

    const handleGoBack = () => {
        goToCatalog();
        dispatchOpenedStudio();
    };

    useEffect(() => {
        if (!openedStudio) dispatchOpenedStudio(studioId);
    }, [openedStudio, dispatchOpenedStudio, studioId]);

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
