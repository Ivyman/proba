import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { isEqual, omit } from "lodash/fp";
import { IFilters, IFieldsData } from "@typing/filters";
import { FILTERS_DEBOUNCED_INTERVAL } from "@config/constants";
import { getFilteredUnitsAmount } from "@store/units/selectors";
import useDebounce from "@hooks/useDebounce";
import useStyles from "./styles";

import { Grid, Box, IconButton } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import Select from "@components/dump/common/Select";
import SortMenu from "@components/dump/common/SortMenu";
import ChipsList from "@components/dump/common/ChipsList";
import SearchField from "./SearchField";

const INIT_FILTERS: IFieldsData = {
    searchQuery: "",
    city: "1",
    cityArea: "0",
    services: [],
};

interface IProps {
    fields: IFilters;
    onCityChange: (city: string) => void;
    onFieldsChange: (filters: Omit<IFieldsData, "city">) => void;
}

export const Filters: React.FC<IProps> = ({
    onCityChange,
    onFieldsChange,
    fields: { cities, cityAreas, services },
}) => {
    const classes = useStyles();
    const [dataIsLoading, setDataIsLoading] = useState<boolean>(false);
    const [showClearButton, setShowClearButton] = useState<boolean>(false);
    const [filterData, setFilterData] = useState<IFieldsData>(INIT_FILTERS);

    const amount: number = useSelector(getFilteredUnitsAmount);

    const [
        debouncedSearchQuery,
        debouncedCity,
        debouncedCityArea,
        debouncedServices,
    ] = [
        useDebounce<string>(filterData.searchQuery, FILTERS_DEBOUNCED_INTERVAL),
        useDebounce<string>(filterData.city, FILTERS_DEBOUNCED_INTERVAL),
        useDebounce<string>(filterData.cityArea, FILTERS_DEBOUNCED_INTERVAL),
        useDebounce<string[]>(filterData.services, FILTERS_DEBOUNCED_INTERVAL),
    ];

    const handleFieldChange = (value: string | string[], fieldName: string) => {
        switch (fieldName) {
            case "city":
                setFilterData({
                    city: value as string,
                    cityArea: "0",
                    searchQuery: "",
                    services: [],
                });
                break;
            case "services":
                setFilterData((prevState: IFieldsData) => ({
                    ...prevState,
                    [fieldName]: value as string[],
                }));
                break;
            default:
                setFilterData((prevState: IFieldsData) => ({
                    ...prevState,
                    [fieldName]: value,
                }));
        }
        setDataIsLoading(true);
    };

    const handleClear = () => {
        setShowClearButton(false);
        setFilterData({ ...INIT_FILTERS, city: filterData.city });
    };

    useEffect(() => {
        if (debouncedCity) {
            onCityChange(debouncedCity);
            setDataIsLoading(false);
        }
    }, [onCityChange, debouncedCity]);

    useEffect(() => {
        if (debouncedSearchQuery || debouncedCityArea || debouncedServices) {
            onFieldsChange({
                searchQuery: debouncedSearchQuery,
                cityArea: debouncedCityArea,
                services: debouncedServices,
            });
        }
        setDataIsLoading(false);
    }, [
        debouncedSearchQuery,
        debouncedCityArea,
        debouncedServices,
        onFieldsChange,
    ]);

    useEffect(() => {
        const initFilters: Omit<IFieldsData, "city"> = omit(
            "city",
            INIT_FILTERS,
        );
        const filters: Omit<IFieldsData, "city"> = omit("city", filterData);

        setShowClearButton(!isEqual(initFilters, filters));
    }, [filterData]);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={5} className={classes.searchFiledWrapper}>
                    <SearchField
                        name="searchQuery"
                        value={filterData.searchQuery}
                        onChange={handleFieldChange}
                        showThrobber={dataIsLoading}
                    />
                </Grid>

                <Grid item xs={7}>
                    <Box display="flex">
                        <Box mr={2}>
                            <Select
                                setDefault
                                name="city"
                                value={filterData.city}
                                options={cities}
                                label="Miasto"
                                labelWidth={50}
                                onChange={handleFieldChange}
                            />
                        </Box>
                        <Box mr={2}>
                            <Select
                                setDefault
                                name="cityArea"
                                value={filterData.cityArea}
                                options={cityAreas[filterData.city]}
                                label="Dzielnica"
                                labelWidth={68}
                                onChange={handleFieldChange}
                            />
                        </Box>

                        {showClearButton && (
                            <Box
                                display="flex"
                                alignItems="center"
                                onClick={handleClear}
                            >
                                <IconButton size="small" color="secondary">
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                        )}
                        <Box
                            display="flex"
                            flexGrow={1}
                            alignItems="center"
                            justifyContent="flex-end"
                        >
                            <SortMenu />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <ChipsList
                        name="services"
                        defaultValue="0"
                        options={services}
                        value={filterData.services}
                        onChange={handleFieldChange}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Box
                        height="100%"
                        display="flex"
                        flexGrow={1}
                        alignItems="center"
                        justifyContent="flex-end"
                    >
                        <h3>{amount}</h3>&nbsp;wyników znaleziono
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};
