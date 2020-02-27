import React, { useState, useEffect, memo } from "react";
import { IFilters } from "@src/types/filters";
import { STUDIOS } from "@src/config/constants";
import { useDebounce } from "@src/hooks/debounce";
import useStyles from "./styles";

import { Grid, Box, RadioGroup } from "@material-ui/core";
import Select from "@src/components/common/Select";
import SortMenu from "@src/components/common/SortMenu";
import ChipField from "@src/components/common/ChipField";
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
    onFiltersChange: (filtersForm: any) => void;
}

export const Filters: React.FC<IProps> = memo(
    ({ onFiltersChange, fields: { cities } }) => {
        const [loadingData, setLoadingData] = useState<boolean>(false);
        const [touched, setTouched] = useState<boolean>(false);
        const [search, setSearch] = useState<string | null>(null);
        const [priceFrom, setPriceFrom] = useState<string | null>(null);
        const [city, setCity] = useState<string | null>(null);

        const [filterData, setFilterData] = useState<any>({
            city: null,
            search: null,
            priceFrom: null,
        });

        const classes = useStyles();

        const debouncedSearch = useDebounce<string | null>(
            search,
            STUDIOS.FILTERS_DEBOUNCED_INTERVAL,
        );
        const debouncedCity = useDebounce<string | null>(
            city,
            STUDIOS.FILTERS_DEBOUNCED_INTERVAL,
        );

        // TODO merge this handlers
        // onChange = event => {
        //     this.setState({ [event.target.name]: event.target.value });
        //   };
        // const handleChange = (fieldName: string, value: string) => {
        //     setFilterData((prevValue: any) => ({
        //         ...prevValue,
        //         [fieldName]: value,
        //     }));
        //     setTouched(true);
        //     setLoadingData(true);
        // };
        const handleCityChange = (value: string) => {
            setCity(value);
            setTouched(true);
        };
        const handleSearchChange = (value: string) => {
            setSearch(value);
            setTouched(true);
            setLoadingData(true);
        };
        const handlePriceFromChange = (value: string) => {
            setPriceFrom(value);
        };

        useEffect(() => {
            if (debouncedSearch !== null || debouncedCity !== null) {
                onFiltersChange({
                    search: debouncedSearch,
                    city: debouncedCity,
                });
                setLoadingData(false);
            }
        }, [debouncedSearch, debouncedCity, onFiltersChange, touched]);

        useEffect(() => {
            if (cities.length) {
                setCity(cities[0].key);
            }
        }, [cities]);

        return (
            <Grid container spacing={2} component="form">
                <Grid item xs={5} className={classes.searchFiledWrapper}>
                    <SearchField
                        onChange={handleSearchChange}
                        showThrobber={loadingData}
                    />
                </Grid>

                <Grid item xs={7}>
                    <Box display="flex">
                        <Box mr={2}>
                            <Select
                                disabled
                                setDefault
                                values={cities}
                                label="Miasto"
                                labelWidth={50}
                                onChange={handleCityChange}
                            />
                        </Box>
                        <Box mr={2}>
                            <Select
                                setDefault
                                values={cityAreas}
                                label="Dzielnica"
                                labelWidth={65}
                                onChange={handlePriceFromChange}
                            />
                        </Box>
                        <Box mr={2}>
                            <Select
                                setDefault
                                values={priceFromRange}
                                label="Cena od"
                                labelWidth={60}
                                onChange={handlePriceFromChange}
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
    },
);
