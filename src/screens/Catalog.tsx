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
import useDispatch from "@src/hooks/useDispatch";

import { Container, Box } from "@material-ui/core";
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
