import React, { useState, useEffect, ChangeEvent } from "react";
import { IFilters, IFieldsData } from "@src/types/filters";
import { STUDIOS } from "@src/config/constants";
import { useDebounce } from "@src/hooks/debounce";
import useStyles from "./styles";

import { Grid, Box } from "@material-ui/core";
import Select from "@src/components/common/Select";
import SortMenu from "@src/components/common/SortMenu";
import SearchField from "./SearchField";

// TODO remove from here
const priceFromRange = [
    { key: "10", name: "10 zł/h" },
    { key: "30", name: "30 zł/h" },
    { key: "50", name: "50 zł/h" },
    { key: "70", name: "70 zł/h" },
    { key: "90", name: "90 zł/h" },
];
const cityAreas = [
    { key: "all", name: "Wszystkie" },
    { key: "bem", name: "Bemowo" },
    { key: "bial", name: "Białołęka" },
    { key: "bel", name: "Bielany" },
    { key: "moc", name: "Mokotów" },
    { key: "och", name: "Ochota" },
    { key: "prpne", name: "Praga Południe" },
    { key: "prpc", name: "Praga Północ" },
    { key: "rem", name: "Rembertów" },
    { key: "sr", name: "Śródmieście" },
    { key: "tar", name: "Targówek" },
    { key: "urs", name: "Ursus" },
    { key: "ursy", name: "Ursynów" },
    { key: "waw", name: "Wawer" },
    { key: "wes", name: "Wesoła" },
    { key: "wil", name: "Wilanów" },
    { key: "wlo", name: "Włochy" },
    { key: "wol", name: "Wola" },
    { key: "zol", name: "Żoliborz" },
];

interface IProps {
    fields: IFilters;
    onCityChange: (city: string) => void;
    onFieldsChange: (filters: Omit<IFieldsData, "city">) => void;
}

export const Filters: React.FC<IProps> = ({
    onCityChange,
    onFieldsChange,
    fields: { cities },
}) => {
    const [dataIsLoading, setDataIsLoading] = useState<boolean>(false);
    const [filterData, setFilterData] = useState<IFieldsData>({
        searchQuery: "",
        city: cities[0].key,
        priceFrom: priceFromRange[0].key,
        cityArea: cityAreas[0].key,
    });

    const classes = useStyles();

    const [
        debouncedSearchQuery,
        debouncedCity,
        debouncedPriceFrom,
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
            filterData.priceFrom,
            STUDIOS.FILTERS_DEBOUNCED_INTERVAL,
        ),
        useDebounce<string>(
            filterData.cityArea,
            STUDIOS.FILTERS_DEBOUNCED_INTERVAL,
        ),
    ];

    const handleFieldChange = (
        event: ChangeEvent<HTMLInputElement | { value: unknown }>,
        name: string,
    ) => {
        const { value } = event.target;

        setFilterData((prevState: IFieldsData) => ({
            ...prevState,
            [name]: value,
        }));
        setDataIsLoading(true);
    };

    useEffect(() => {
        if (debouncedCity) onCityChange(debouncedCity);
        if (debouncedSearchQuery || debouncedPriceFrom || debouncedCityArea) {
            onFieldsChange({
                searchQuery: debouncedSearchQuery,
                cityArea: debouncedCityArea,
                priceFrom: debouncedPriceFrom,
            });
        }
        setDataIsLoading(false);
    }, [
        debouncedSearchQuery,
        debouncedCity,
        debouncedCityArea,
        debouncedPriceFrom,
        onCityChange,
        onFieldsChange,
    ]);

    return (
        <Grid container spacing={2} component="form">
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
                            values={cities}
                            label="Miasto"
                            labelWidth={50}
                            onChange={handleFieldChange}
                        />
                    </Box>
                    <Box mr={2}>
                        <Select
                            setDefault
                            name="cityArea"
                            values={cityAreas}
                            label="Dzielnica"
                            labelWidth={65}
                            onChange={handleFieldChange}
                        />
                    </Box>
                    <Box mr={2}>
                        <Select
                            setDefault
                            name="priceFrom"
                            values={priceFromRange}
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
