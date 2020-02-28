import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { IFiltersData, IFilters } from "@src/types/filters";
import { EApiStatuses } from "@src/types/api";
import { fetchStudios } from "@src/store/studios/actions";
import { fetchFilters } from "@src/store/filters/actions";
import { getFilters } from "@src/store/filters/selectors";
import { getStudiosApiStatus } from "@src/store/studios/selectors";
import { CatalogRouter } from "@src/routing/CatalogRouter";
import { useDispatch } from "@src/hooks/dispatch";

import { Container, Box, Grid } from "@material-ui/core";
import Filters from "@src/components/Filters";
import Divider from "@src/components/common/Divider";
import MapContainer from "@src/containers/MapContainer";
import Screen from "@src/components/Screen";

const CatalogScreen: React.FC = () => {
    const fields: IFilters = useSelector(getFilters);
    const studiosApiStatus: EApiStatuses = useSelector(getStudiosApiStatus);

    const dispatchStudios = useDispatch<typeof fetchStudios, IFiltersData>(
        fetchStudios,
    );
    const dispatchFilters = useDispatch<typeof fetchFilters, undefined>(
        fetchFilters,
    );

    const handleFiltersChange = ({
        search,
        city,
        cityArea,
        priceFrom,
    }: IFiltersData) => {
        dispatchStudios({
            search,
            city,
            cityArea,
            priceFrom,
        });
    };

    useEffect(() => dispatchFilters(), [dispatchFilters]);
    // useEffect(() => {
    //     if (fields.cities.length) {
    //         dispatchStudios({ city: fields.cities[0].key });
    //     }
    // }, [fields, dispatchStudios]);

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

            <Box py={2} flexGrow={1} display="flex" alignItems="stretch">
                <Container maxWidth="xl">
                    <Grid container spacing={2} style={{ minHeight: "100%" }}>
                        <Grid item sm={5}>
                            <CatalogRouter />
                        </Grid>
                        <Grid item sm={7}>
                            <MapContainer />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Screen>
    );
};

export default CatalogScreen;
