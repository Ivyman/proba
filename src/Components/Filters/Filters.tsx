import React, { useState, useEffect, memo } from "react";
import { IFilters } from "@src/types/filters";
import { Studios } from "@src/utils/constants";
import { useDebounce } from "@src/hooks/debounce";

export const Filters: React.FC<{
    onFiltersChange: (filtersForm: any) => void;
    fields: IFilters;
}> = memo(({ onFiltersChange, fields }) => {
    const [touched, setTouched] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");
    const [city, setCity] = useState<string>("");

    const { cities } = fields;

    const debouncedSearch = useDebounce<string>(
        search,
        Studios.filtersDebouncedInterval,
    );
    const debouncedCity = useDebounce<string>(
        city,
        Studios.filtersDebouncedInterval,
    );

    const handleCityChange = (cityKey: string) => {
        setCity(cityKey);
        setTouched(true);
    };

    const handleSearchChange = (value: string) => {
        setSearch(value);
        setTouched(true);
    };

    useEffect(() => {
        if (touched) {
            onFiltersChange({ search: debouncedSearch, city: debouncedCity });
        }
    }, [debouncedSearch, debouncedCity, onFiltersChange, touched]);

    useEffect(() => {
        if (cities.length) {
            setCity(cities[0].key);
        }
    }, [cities]);

    return (
        <form>
            <div>
                {cities.map(cityItem => (
                    <div key={cityItem.key}>
                        <input
                            onChange={() => handleCityChange(cityItem.key)}
                            type="radio"
                            name="city"
                            id={`${cityItem.key}-radio-box`}
                            value={cityItem.key}
                            checked={city === cityItem.key}
                        />
                        <label htmlFor={`${cityItem.key}-radio-box`}>
                            {cityItem.name}
                        </label>
                    </div>
                ))}
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Wpisz nazwe"
                    onChange={(event: any) =>
                        handleSearchChange(event.target.value)
                    }
                />
            </div>
        </form>
    );
});
