import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { IFilters, IFieldsData } from "@src/types/filters";
import { EApiStatuses } from "@src/types/api";
import { fetchStudios } from "@src/store/studios/actions";
import { setFilterFields } from "@src/store/filters/actions";
import { getFilters } from "@src/store/filters/selectors";
import { getStudiosApiStatus } from "@src/store/studios/selectors";
import { getFiltersApiStatus } from "@src/store/filters/selectors";
import { CatalogRouter } from "@src/routing/CatalogRouter";
import { useDispatch } from "@src/hooks/dispatch";

import { Container, Box, Grid } from "@material-ui/core";
import Filters from "@src/components/Filters";
import Divider from "@src/components/common/Divider";
import MapContainer from "@src/containers/MapContainer";
import Loader from "@src/components/common/Loader";

const CatalogScreen: React.FC = () => {
    const filterFields: IFilters = useSelector(getFilters);
    const studiosApiStatus: EApiStatuses = useSelector(getStudiosApiStatus);
    const filtersApiStatus: EApiStatuses = useSelector(getFiltersApiStatus);

    const dispatchStudios = useDispatch<typeof fetchStudios, string>(
        fetchStudios,
    );
    const dispatchFilterFields = useDispatch<
        typeof setFilterFields,
        Omit<IFieldsData, "city">
    >(setFilterFields);

    const handleCityChange = useCallback(
        (city: string) => {
            dispatchStudios(city);
        },
        [dispatchStudios],
    );
    const handleFieldsChange = useCallback(
        (fieldsData: Omit<IFieldsData, "city">) =>
            dispatchFilterFields(fieldsData),
        [dispatchFilterFields],
    );

    return (
        <>
            <Box py={2}>
                <Container maxWidth="xl">
                    <Loader apiStatus={filtersApiStatus}>
                        <Filters
                            onCityChange={handleCityChange}
                            onFieldsChange={handleFieldsChange}
                            fields={filterFields}
                        />
                    </Loader>
                </Container>
            </Box>

            <Divider />

            <Box py={2} flexGrow={1} display="flex" alignItems="stretch">
                <Container maxWidth="xl">
                    <Grid container spacing={2} style={{ minHeight: "100%" }}>
                        <Grid item sm={5}>
                            <Loader apiStatus={studiosApiStatus}>
                                <CatalogRouter />
                            </Loader>
                        </Grid>
                        <Grid item sm={7}>
                            <Loader apiStatus={studiosApiStatus}>
                                <MapContainer />
                            </Loader>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default CatalogScreen;
