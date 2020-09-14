import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { IUnit } from "@typing/unit";
import { getOpenedUnit } from "@store/units/selectors";
import { setOpenedUnit } from "@store/units/actions";
import useDispatch from "@hooks/useDispatch";
import * as ROUTERS from "@config/router";

import { Card, Box } from "@material-ui/core";
import UnitBox from "@components/dump/UnitBox";

export const Unit: React.FC = () => {
    const history = useHistory();
    const { unitId } = useParams<{ unitId: string }>();

    const openedUnit: IUnit | undefined = useSelector(getOpenedUnit);

    const dispatchOpenedUnit = useDispatch<typeof setOpenedUnit, string>(
        setOpenedUnit,
    );

    const goToCatalog = () => history.push(ROUTERS.CATALOG);

    const handleGoBack = () => {
        goToCatalog();
        dispatchOpenedUnit();
    };

    useEffect(() => {
        !openedUnit && dispatchOpenedUnit(unitId);
    }, [openedUnit, dispatchOpenedUnit, unitId]);

    return (
        <Box py={1.5} pr={1.5} pl={3}>
            <Card>
                <UnitBox openedUnit={openedUnit} onGoBack={handleGoBack} />
            </Card>
        </Box>
    );
};
