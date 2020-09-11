import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { IFilters, IFieldsData } from "@typing/filters";
import { EApiStatuses } from "@typing/api";
import { fetchStudios } from "@store/studios/actions";
import { setFilterFields } from "@store/filters/actions";
import { getFilters } from "@store/filters/selectors";
import { getStudiosApiStatus } from "@store/studios/selectors";
import { getFiltersApiStatus } from "@store/filters/selectors";
import { CatalogRouter } from "@routing/CatalogRouter";
import useDispatch from "@hooks/useDispatch";

import { Container, Box } from "@material-ui/core";
import MapContainer from "@components/smart/MapContainer";
import Filters from "@components/dump/Filters";
import Divider from "@components/dump/common/Divider";
import Loader from "@components/dump/common/Loader";

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
        (city: string) => dispatchStudios(city),
        [dispatchStudios],
    );
    const handleFieldsChange = useCallback(
        (fieldsData: Omit<IFieldsData, "city">) =>
            dispatchFilterFields(fieldsData),
        [dispatchFilterFields],
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
                    <Loader apiStatus={studiosApiStatus}>
                        <CatalogRouter />
                    </Loader>
                </Box>
                <Box width={3 / 5}>
                    <Loader apiStatus={studiosApiStatus}>
                        <MapContainer />
                    </Loader>
                </Box>
            </Box>
        </>
    );
};

export default CatalogScreen;
