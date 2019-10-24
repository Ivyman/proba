import React, { useState, useEffect } from "react";

import { Studios } from "@src/config/Constants";
import { createCityField } from "@src/helpers/filters";

import { Wrapper } from "./elements";

export const Filters: React.FC<{
  onFiltersChange: (filtersForm: any) => void;
}> = ({ onFiltersChange }) => {
  const [nameInput, setNameInput] = useState("");
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [checkboxMap, setCheckboxMap] = useState(
    createCityField(Studios.cities),
  );

  const handleCheckboxChange = (key: string) =>
    setCheckboxMap({ ...checkboxMap, [key]: !checkboxMap[key] });

  const handleInputNameChange = (value: string) => setNameInput(value);

  useEffect(() => {
    if (isFirstRender) {
      return setIsFirstRender(false);
    }

    onFiltersChange({ query: nameInput, city: checkboxMap });
  }, [nameInput, checkboxMap]);

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
