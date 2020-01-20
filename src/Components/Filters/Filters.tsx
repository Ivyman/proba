import React, { useState, useEffect, memo, ChangeEvent } from "react";
import { IFilters } from "@src/types/filters";
import { Studios } from "@src/utils/constants";
import { useDebounce } from "@src/hooks/debounce";
import useStyles from "./styles";

import { FormControl, TextField, RadioGroup } from "@material-ui/core";
import ChipField from "@src/components/ChipField";

interface IProps {
    fields: IFilters;
    onFiltersChange: (filtersForm: any) => void;
}

export const Filters: React.FC<IProps> = memo(
    ({ onFiltersChange, fields: { cities } }) => {
        const [touched, setTouched] = useState<boolean>(false);
        const [search, setSearch] = useState<string>("");
        const [city, setCity] = useState<string>("");

        const classes = useStyles();

        const debouncedSearch = useDebounce<string>(
            search,
            Studios.filtersDebouncedInterval,
        );
        const debouncedCity = useDebounce<string>(
            city,
            Studios.filtersDebouncedInterval,
        );

        const handleCityChange = (
            event: React.ChangeEvent<HTMLInputElement>,
        ) => {
            setCity(event.target.value);
            setTouched(true);
        };

        const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
            setSearch(event.target.value);
            setTouched(true);
        };

        useEffect(() => {
            if (touched) {
                onFiltersChange({
                    search: debouncedSearch,
                    city: debouncedCity,
                });
            }
        }, [debouncedSearch, debouncedCity, onFiltersChange, touched]);

        useEffect(() => {
            if (cities.length) {
                setCity(cities[0].key);
            }
        }, [cities]);

        return (
            <form className={classes.root}>
                <FormControl component="fieldset">
                    <RadioGroup
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
                    </RadioGroup>
                </FormControl>

                <FormControl component="fieldset">
                    <TextField
                        size="small"
                        label="Wpisz nazwe"
                        variant="outlined"
                        className={classes.searchFiled}
                        onChange={handleSearchChange}
                    />
                </FormControl>
            </form>
        );
    },
);
