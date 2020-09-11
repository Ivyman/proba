import { useState, useEffect } from "react";
import { IStudio } from "@typing//studio";
import { IIdNameRecord } from "@typing//api";
import { IFieldsData } from "@typing//filters";
import { hasSubsring } from "@utils/common";

const useFilters = (studios: IStudio[], fields: Omit<IFieldsData, "city">) => {
    const [filteredStudios, setFilteredStudios] = useState<IStudio[]>(studios);

    useEffect(() => {
        const { searchQuery, cityArea, services } = fields;

        const studiosList = studios.filter((studio: IStudio) => {
            const {
                name,
                address: { cityArea: area, street, buildingNumber },
                services: studioServices,
            } = studio;

            const servicesList: string[] = studioServices.map(
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

        setFilteredStudios(studiosList);
    }, [setFilteredStudios, fields, studios]);

    return filteredStudios;
};

export default useFilters;
