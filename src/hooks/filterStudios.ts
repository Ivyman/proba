import { useState, useEffect } from "react";
import { IStudio } from "@src/types/studio";
import { IRecord } from "@src/types/main";
import { IFieldsData } from "@src/types/filters";
import { hasSubsring } from "@src/utils/common";

export const useFilterStudios = (
    studios: IStudio[],
    fields: Omit<IFieldsData, "city">,
) => {
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
                (item: IRecord) => item.key,
            );

            const filterBySearchQuery: boolean =
                hasSubsring(name, searchQuery) ||
                hasSubsring(`${street} ${buildingNumber}`, searchQuery);
            const filterByCityArea =
                cityArea === area.key || cityArea === "all";
            const filterByServices: boolean = services.every(item =>
                servicesList.includes(item),
            );

            return filterBySearchQuery && filterByCityArea && filterByServices;
        });

        setFilteredStudios(studiosList);
    }, [setFilteredStudios, fields, studios]);

    return filteredStudios;
};
