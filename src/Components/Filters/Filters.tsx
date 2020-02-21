import React, { useState, useEffect, memo, ChangeEvent } from "react";
import { IFilters } from "@src/types/filters";
import { Studios } from "@src/utils/constants";
import { useDebounce } from "@src/hooks/debounce";
import useStyles from "./styles";

import { TextField, Grid, CircularProgress, Box } from "@material-ui/core";
import Select from "@src/components/common/Select";

interface IProps {
    fields: IFilters;
    onFiltersChange: (filtersForm: any) => void;
}

export const Filters: React.FC<IProps> = memo(
    ({ onFiltersChange, fields: { cities } }) => {
        const [touched, setTouched] = useState<boolean>(false);
        const [search, setSearch] = useState<string | null>(null);
        const [city, setCity] = useState<string | null>(null);
        const [showThrobber, setShowThrobber] = useState<boolean>(false);

        const classes = useStyles();

        const debouncedSearch = useDebounce<string | null>(
            search,
            Studios.filtersDebouncedInterval,
        );
        const debouncedCity = useDebounce<string | null>(
            city,
            Studios.filtersDebouncedInterval,
        );

        const handleCityChange = (value: string) => {
            setCity(value);
            setTouched(true);
        };
        const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
            setSearch(event.target.value);
            setTouched(true);
            setShowThrobber(true);
        };

        useEffect(() => {
            if (debouncedSearch !== null || debouncedCity !== null) {
                onFiltersChange({
                    search: debouncedSearch,
                    city: debouncedCity,
                });
            }
            setShowThrobber(false);
        }, [debouncedSearch, debouncedCity, onFiltersChange, touched]);

        useEffect(() => {
            if (cities.length) {
                setCity(cities[0].key);
            }
        }, [cities]);

        return (
            <Grid container spacing={2} component="form">
                <Grid item xs={5} className={classes.searchFiledWrapper}>
                    <TextField
                        fullWidth
                        size="small"
                        label="Wpisz nazwe lub adres"
                        variant="outlined"
                        onChange={handleSearchChange}
                        InputProps={{
                            endAdornment: showThrobber && (
                                <Box display="flex" pl={1}>
                                    <CircularProgress size={25} />
                                </Box>
                            ),
                        }}
                    />
                </Grid>

                <Grid item xs={7}>
                    <Select
                        values={cities}
                        label="Miasto"
                        onChange={handleCityChange}
                    />

                    {/* <RadioGroup
                        aria-label="position"
                        value={city}
                        className={classes.radioGroup}
                        onChange={handleCityChange}
                    >
                        {cities.map(cityItem => (
                            <ChipField
                                key={cityItem.key}
                                label={cityItem.name}
                                value={cityItem.key}
                                checked={city === cityItem.key}
                            />
                        ))}
                    </RadioGroup> */}
                </Grid>
            </Grid>
        );
    },
);
