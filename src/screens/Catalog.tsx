import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { IFiltersData, IFilters } from "@src/types/filters";
import { EApiStatuses } from "@src/types/api";
import { fetchStudios } from "@src/store/studios/actions";
import { fetchFilters } from "@src/store/filters/actions";
import { getFilters } from "@src/store/filters/selectors";
import { getStudiosApiStatus } from "@src/store/studios/selectors";
import { RouterCatalog } from "@src/routing/RouterCatalog";
import { useDispatch } from "@src/hooks/dispatch";

import { Divider, Container, Box, Grid } from "@material-ui/core";
import Filters from "@src/components/Filters";
import Map from "@src/containers/Map";
import Screen from "@src/components/Screen";

const CatalogScreen: React.FC = () => {
    const dispatchStudios = useDispatch<typeof fetchStudios, IFiltersData>(
        fetchStudios,
    );
    const dispatchFilters = useDispatch<typeof fetchFilters, undefined>(
        fetchFilters,
    );
    const fields: IFilters = useSelector(getFilters);
    const studiosApiStatus: EApiStatuses = useSelector(getStudiosApiStatus);

    const handleFiltersChange = (filtersData: IFiltersData) => {
        dispatchStudios({
            search: filtersData.search,
            city: filtersData.city,
        });
    };

    useEffect(() => dispatchFilters(), [dispatchFilters]);
    useEffect(() => {
        if (fields.cities.length) {
            dispatchStudios({ city: fields.cities[0].key });
        }
    }, [fields, dispatchStudios]);

    return (
        <Screen apiStatus={studiosApiStatus}>
            <Box py={2}>
                <Container maxWidth="xl">
                    <Filters
                        onFiltersChange={handleFiltersChange}
                        fields={fields}
                    />
                </Container>
            </Box>

            <Divider />

            <Box py={2}>
                <Container maxWidth="xl">
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <RouterCatalog />
                        </Grid>
                        <Grid item xs={7}>
                            <Map />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Screen>
    );
};

export default CatalogScreen;
