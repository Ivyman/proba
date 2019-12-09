import React, { useState, useEffect, useCallback } from "react";

import { IFilters } from "@src/types/filters";
import { Studios } from "@src/config/Constants";
import { useDebounce } from "@src/hooks/debounce";
import { Wrapper, Cities } from "./elements";

export const Filters: React.FC<{
  onFiltersChange: (filtersForm: any) => void;
  fields: IFilters;
}> = ({ onFiltersChange, fields }) => {
  const { cities } = fields;
  const [touched, setTouched] = useState(false);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");

  const debouncedSearch = useDebounce(search, Studios.filtersDebouncedInterval);
  const debouncedCity = useDebounce(city, Studios.filtersDebouncedInterval);

  const handleCityChange = useCallback(
    (cityKey: string) => {
      setCity(cityKey);
      setTouched(true);
    },
    [setCity],
  );

  const handleSearchChange = useCallback(
    (value: string) => {
      setSearch(value);
      setTouched(true);
    },
    [setSearch],
  );

  useEffect(() => {
    if (touched) {
      onFiltersChange({ search: debouncedSearch, city: debouncedCity });
    }
  }, [debouncedSearch, debouncedCity, onFiltersChange]);

  useEffect(() => {
    if (cities.length) {
      setCity(cities[0].key);
    }
  }, [cities]);

  return (
    <Wrapper as="form">
      <Cities>
        {cities.map(cityItem => (
          <label key={cityItem.key}>
            {cityItem.name}
            <input
              onChange={() => handleCityChange(cityItem.key)}
              type="radio"
              name="city"
              value={cityItem.key}
              checked={city === cityItem.key}
            />
          </label>
        ))}
      </Cities>

      <input
        type="text"
        placeholder="Wpisz nazwe"
        onChange={(event: any) => handleSearchChange(event.target.value)}
      />
    </Wrapper>
  );
};
