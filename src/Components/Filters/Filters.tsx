import React, { useState, useEffect } from "react";

import { Studios } from "@src/config/Constants";
import { createCityField } from "@src/helpers/filters";
import { useDebounce } from "@src/hooks/debounce";

import { Wrapper } from "./elements";

export const Filters: React.FC<{
  onFiltersChange: (filtersForm: any) => void;
}> = ({ onFiltersChange }) => {
  const { filtersDebounced, cities } = Studios;
  const [nameInput, setNameInput] = useState("");
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [checkboxMap, setCheckboxMap] = useState(createCityField(cities));
  const debouncedNameInput = useDebounce(nameInput, filtersDebounced);
  const debouncedCheckboxMap = useDebounce(checkboxMap, filtersDebounced);

  const handleCheckboxChange = (key: string) =>
    setCheckboxMap({ ...checkboxMap, [key]: !checkboxMap[key] });

  const handleInputNameChange = (value: string) => setNameInput(value);

  useEffect(() => {
    if (isFirstRender) {
      return setIsFirstRender(false);
    }

    onFiltersChange({ query: debouncedNameInput, city: debouncedCheckboxMap });
  }, [debouncedNameInput, debouncedCheckboxMap]);

  return (
    <Wrapper>
      {Studios.cities.map(city => (
        <label key={city.key}>
          {city.name}
          <input
            onChange={() => handleCheckboxChange(city.key)}
            type="checkbox"
            name="city"
            value={city.key}
            checked={checkboxMap[city.key]}
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
