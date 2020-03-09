import React, { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { IFilters, IFieldsData } from "@src/types/filters";
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
    const filterFields: IFilters = useSelector(getFilters);
    const studiosApiStatus: EApiStatuses = useSelector(getStudiosApiStatus);

    const dispatchStudios = useDispatch<typeof fetchStudios, string>(
        fetchStudios,
    );
    const dispatchFilters = useDispatch<typeof fetchFilters, undefined>(
        fetchFilters,
    );

    const handleCityChange = useCallback(
        (city: string) => {
            dispatchStudios(city);
        },
        [dispatchStudios],
    );

    const handleFieldsChange = useCallback(
        (fieldsData: Omit<IFieldsData, "city">) => console.log(fieldsData),
        [],
    );

    // const handCityChange = ({
    //     searchQuery,
    //     city,
    //     cityArea,
    //     priceFrom,
    // }: IFiltersData) => {
    //     dispatchStudios({
    //         searchQuery,
    //         city,
    //         cityArea,
    //         priceFrom,
    //     });
    // };

    useEffect(() => dispatchFilters(), [dispatchFilters]);
    useEffect(() => {
        if (filterFields.cities.length)
            dispatchStudios(filterFields.cities[0].key);
    }, [filterFields, dispatchStudios]);

    return (
        <Screen apiStatus={studiosApiStatus}>
            <Box py={2}>
                <Container maxWidth="xl">
                    <Filters
                        onCityChange={handleCityChange}
                        onFieldsChange={handleFieldsChange}
                        fields={filterFields}
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
