import { useState, useEffect } from "react";
import { IUnit } from "@typing/unit";
import { IIdNameRecord } from "@typing/api";
import { IFieldsData } from "@typing/filters";
import { hasSubsring } from "@utils/common";

const useFilters = (units: IUnit[], fields: Omit<IFieldsData, "city">) => {
    const [filteredUnits, setFilteredUnits] = useState<IUnit[]>(units);

    useEffect(() => {
        const { searchQuery, cityArea, services } = fields;

        const unitsList = units.filter((unit: IUnit) => {
            const {
                name,
                address: { cityArea: area, street, buildingNumber },
                services: unitServices,
            } = unit;

            const servicesList: string[] = unitServices.map(
                (item: IIdNameRecord) => item.id,
            );

            const filterBySearchQuery: boolean =
                hasSubsring(name, searchQuery) ||
                hasSubsring(`${street} ${buildingNumber}`, searchQuery);

            const filterByCityArea = cityArea === area.id || cityArea === "0";

            const filterByServices: boolean =
                services.some((item) => servicesList.includes(item)) ||
                !services.length;

            return filterBySearchQuery && filterByCityArea && filterByServices;
        });

        setFilteredUnits(unitsList);
    }, [setFilteredUnits, fields, units]);

    return filteredUnits;
};

export default useFilters;
