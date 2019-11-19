import React, { useState, useEffect, useCallback } from "react";

import { Studios } from "@src/config/Constants";
import { useDebounce } from "@src/hooks/debounce";

import { Wrapper } from "./elements";

export const Filters: React.FC<{
  onFiltersChange: (filtersForm: any) => void;
}> = ({ onFiltersChange }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("all");

  const debouncedName = useDebounce(name, Studios.filtersDebounced);
  const debouncedCity = useDebounce(city, Studios.filtersDebounced);

  const handleCityChange = useCallback((cityKey: string) => setCity(cityKey), [
    setCity,
  ]);

  const handleInputNameChange = useCallback((value: string) => setName(value), [
    setName,
  ]);

  useEffect(() => {
    onFiltersChange({ query: debouncedName, city: debouncedCity });
  }, [debouncedName, debouncedCity, onFiltersChange]);

  return (
    <Wrapper>
      {Studios.cities.map(cityItem => (
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

      <input
        type="text"
        placeholder="Wpisz nazwe"
        onChange={(event: any) => handleInputNameChange(event.target.value)}
      />
    </Wrapper>
  );
};
