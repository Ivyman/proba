import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IFilters, IFieldsData } from "@typing/filters";
import { EApiStatuses } from "@typing/api";
import { fetchUnits } from "@store/units/actions";
import { setFilterFields } from "@store/filters/actions";
import { getFilters } from "@store/filters/selectors";
import { getUnitsApiStatus } from "@store/units/selectors";
import { getFiltersApiStatus } from "@store/filters/selectors";
import { CatalogRouter } from "@routing/CatalogRouter";
import useDispatch from "@hooks/useDispatch";
import * as ROUTERS from "@config/router";

import { Container, Box } from "@material-ui/core";
import MapContainer from "@components/smart/MapContainer";
import Filters from "@components/dump/Filters";
import Divider from "@components/dump/common/Divider";
import Loader from "@components/dump/common/Loader";

const CatalogScreen: React.FC = () => {
    const history = useHistory();

    const filterFields: IFilters = useSelector(getFilters);
    const unitsApiStatus: EApiStatuses = useSelector(getUnitsApiStatus);
    const filtersApiStatus: EApiStatuses = useSelector(getFiltersApiStatus);

    const dispatchUnits = useDispatch<typeof fetchUnits, string>(fetchUnits);
    const dispatchFilterFields = useDispatch<
        typeof setFilterFields,
        Omit<IFieldsData, "city">
    >(setFilterFields);

    const handleCityChange = useCallback(
        (city: string) => dispatchUnits(city),
        [dispatchUnits],
    );
    const handleFieldsChange = useCallback(
        (fieldsData: Omit<IFieldsData, "city">) => {
            history.push(ROUTERS.CATALOG);
            dispatchFilterFields(fieldsData);
        },
        [dispatchFilterFields, history],
    );

    return (
        <>
            <Container maxWidth={false}>
                <Box py={2}>
                    <Loader apiStatus={filtersApiStatus}>
                        <Filters
                            onCityChange={handleCityChange}
                            onFieldsChange={handleFieldsChange}
                            fields={filterFields}
                        />
                    </Loader>
                </Box>
            </Container>

            <Divider />

            <Box display="flex" flexGrow={1}>
                <Box width={2 / 5} position="relative" overflow="auto">
                    <Loader apiStatus={unitsApiStatus}>
                        <CatalogRouter />
                    </Loader>
                </Box>
                <Box width={3 / 5}>
                    <Loader apiStatus={unitsApiStatus}>
                        <MapContainer />
                    </Loader>
                </Box>
            </Box>
        </>
    );
};

export default CatalogScreen;
