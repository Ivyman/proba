import React, { useState, useEffect } from "react";

import { studios } from "@src/config/Constants";
import { IFiltersForm } from "@src/types/studio";

import { Wrapper } from "./elements";

type IFiltersComponent = React.FunctionComponent<{
  onFiltersChange: (filtersForm: IFiltersForm) => void;
}>;

export const Filters: IFiltersComponent = ({ onFiltersChange }) => {
  const [nameInput, setNameInput] = useState("");
  const [checkboxMap, setCheckboxMap] = useState(
    studios.cities.reduce(
      (acc, next) => ({
        ...acc,
        [next.key]: false,
      }),
      {} as { [key: string]: boolean },
    ),
  );

  const handleCheckboxChange = (key: string) =>
    setCheckboxMap({ ...checkboxMap, [key]: !checkboxMap[key] });

  const handleInputNameChange = (value: string) => setNameInput(value);

  useEffect(
    () => onFiltersChange({ studionName: nameInput, city: checkboxMap }),
    [nameInput, checkboxMap, onFiltersChange],
  );

  return (
    <Wrapper>
      {studios.cities.map(city => (
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
