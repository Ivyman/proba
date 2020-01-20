import React, { useState, useEffect, memo, ChangeEvent } from "react";
import { IFilters } from "@src/types/filters";
import { Studios } from "@src/utils/constants";
import { useDebounce } from "@src/hooks/debounce";

import {
    FormControl,
    TextField,
    RadioGroup,
    FormControlLabel,
    Radio,
} from "@material-ui/core";

interface IProps {
    fields: IFilters;
    onFiltersChange: (filtersForm: any) => void;
}

export const Filters: React.FC<IProps> = memo(
    ({ onFiltersChange, fields: { cities } }) => {
        const [touched, setTouched] = useState<boolean>(false);
        const [search, setSearch] = useState<string>("");
        const [city, setCity] = useState<string>("");

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
            <form>
                <FormControl component="fieldset">
                    <RadioGroup
                        aria-label="position"
                        value={city}
                        onChange={handleCityChange}
                    >
                        {cities.map(cityItem => (
                            <FormControlLabel
                                key={cityItem.key}
                                value={cityItem.key}
                                checked={city === cityItem.key}
                                control={<Radio color="primary" />}
                                label={cityItem.name}
                                labelPlacement="end"
                            />
                        ))}
                    </RadioGroup>
                </FormControl>

                <FormControl component="fieldset">
                    <TextField
                        label="Wpisz nazwe"
                        variant="outlined"
                        onChange={handleSearchChange}
                    />
                </FormControl>
            </form>
        );
    },
);
