import React, { useState, useEffect, ChangeEvent } from "react";
import { IFilters, IFieldsData } from "@src/types/filters";
import { STUDIOS } from "@src/config/constants";
import { useDebounce } from "@src/hooks/debounce";
import useStyles from "./styles";

import { Grid, Box } from "@material-ui/core";
import Select from "@src/components/common/Select";
import SortMenu from "@src/components/common/SortMenu";
import SearchField from "./SearchField";

interface IProps {
    fields: IFilters;
    onCityChange: (city: string) => void;
    onFieldsChange: (filters: Omit<IFieldsData, "city">) => void;
}

export const Filters: React.FC<IProps> = ({
    onCityChange,
    onFieldsChange,
    fields: { cities, priceTo, cityAreas },
}) => {
    const [dataIsLoading, setDataIsLoading] = useState<boolean>(false);

    const [filterData, setFilterData] = useState<IFieldsData>({
        // TODO: Fill this automaticaly
        searchQuery: "",
        city: "waw",
        priceTo: "all",
        cityArea: "all",
    });

    const classes = useStyles();

    const [
        debouncedSearchQuery,
        debouncedCity,
        debouncedPriceTo,
        debouncedCityArea,
    ] = [
        useDebounce<string>(
            filterData.searchQuery,
            STUDIOS.FILTERS_DEBOUNCED_INTERVAL,
        ),
        useDebounce<string>(
            filterData.city,
            STUDIOS.FILTERS_DEBOUNCED_INTERVAL,
        ),
        useDebounce<string>(
            filterData.priceTo,
            STUDIOS.FILTERS_DEBOUNCED_INTERVAL,
        ),
        useDebounce<string>(
            filterData.cityArea,
            STUDIOS.FILTERS_DEBOUNCED_INTERVAL,
        ),
    ];

    const handleFieldChange = (
        event: ChangeEvent<HTMLInputElement | { value: unknown }>,
        fieldName: string,
    ) => {
        const { value } = event.target;

        if (fieldName === "city") {
            setFilterData({
                city: value as string,
                priceTo: "all",
                cityArea: "all",
                searchQuery: "",
            });
        } else {
            setFilterData((prevState: IFieldsData) => ({
                ...prevState,
                [fieldName]: value,
            }));
        }

        setDataIsLoading(true);
    };

    useEffect(() => {
        if (debouncedCity) onCityChange(debouncedCity);
        setDataIsLoading(false);
    }, [onCityChange, debouncedCity]);

    useEffect(() => {
        if (debouncedSearchQuery || debouncedPriceTo || debouncedCityArea) {
            onFieldsChange({
                searchQuery: debouncedSearchQuery,
                cityArea: debouncedCityArea,
                priceTo: debouncedPriceTo,
            });
        }
        setDataIsLoading(false);
    }, [
        debouncedSearchQuery,
        debouncedCityArea,
        debouncedPriceTo,
        onFieldsChange,
    ]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={5} className={classes.searchFiledWrapper}>
                <SearchField
                    name="searchQuery"
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
                            labelWidth={65}
                            onChange={handleFieldChange}
                        />
                    </Box>
                    <Box mr={2}>
                        <Select
                            setDefault
                            name="priceTo"
                            value={filterData.priceTo}
                            options={priceTo}
                            label="Cena od"
                            labelWidth={60}
                            onChange={handleFieldChange}
                        />
                    </Box>
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
        // <Grid container spacing={2}>
        //     <Grid item>
        //         <RadioGroup
        //             aria-label="position"
        //             value={city}
        //             className={classes.radioGroup}
        //             onChange={() => {}}
        //         >
        //             {cities.map(cityItem => (
        //                 <ChipField
        //                     key={cityItem.key}
        //                     label={cityItem.name}
        //                     value={cityItem.key}
        //                     checked={city === cityItem.key}
        //                 />
        //             ))}
        //         </RadioGroup>
        //     </Grid>
        // </Grid>
    );
};
