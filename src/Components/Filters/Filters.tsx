import React, { useState, useEffect, useCallback } from "react";

import { IFilters } from "@src/types/filters";
import { Studios } from "@src/config/Constants";
import { useDebounce } from "@src/hooks/debounce";
import { Wrapper, Cities, CityBox } from "./elements";

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
          <CityBox key={cityItem.key}>
            <input
              onChange={() => handleCityChange(cityItem.key)}
              type="radio"
              name="city"
              id={`${cityItem.key}-radio-box`}
              value={cityItem.key}
              checked={city === cityItem.key}
            />
            <label htmlFor={`${cityItem.key}-radio-box`}>{cityItem.name}</label>
          </CityBox>
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
