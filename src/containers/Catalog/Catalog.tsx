import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "@src/hooks/dispatch";
import { IFieldsData } from "@src/types/filters";
import { hasSubsring } from "@src/utils/common";
import { IStudio } from "@src/types/studio";
import { setHoveredStudio, setOpenedStudio } from "@src/store/studios/actions";
import { getStudios, getHoveredStudioId } from "@src/store/studios/selectors";
import { getFilterFields } from "@src/store/filters/selectors";
import * as ROUTERS from "@src/config/router";

import CatalogItem from "@src/components/CatalogItem";

export const Catalog: React.FC = () => {
    const [filteredStudios, setFilteredStudios] = useState<IStudio[]>([]);
    const history = useHistory();

    const studios: IStudio[] = useSelector(getStudios);

    const hoverdStudioId: string = useSelector(getHoveredStudioId);

    const filterFields: Omit<IFieldsData, "city"> = useSelector(
        getFilterFields,
    );

    const dispatchHoveredStudio = useDispatch<typeof setHoveredStudio, string>(
        setHoveredStudio,
    );
    const dispatchOpenedStudio = useDispatch<typeof setOpenedStudio, string>(
        setOpenedStudio,
    );

    const handleItemClick = useCallback(
        (studioId: string) => {
            dispatchOpenedStudio(studioId);
            history.push(`${ROUTERS.CATALOG}/${studioId}`);
        },
        [dispatchOpenedStudio, history],
    );

    useEffect(() => {
        // TODO move it to hook
        // TODO it rus twice after change filterFields, maybe reselect chenge it
        const { searchQuery, cityArea, priceTo } = filterFields;
        const studiosList = studios.filter((studio: IStudio) => {
            const {
                name,
                price: { to },
                address: { cityArea: area },
            } = studio;

            // TODO implement search by address
            return (
                hasSubsring(name, searchQuery) &&
                (to >= priceTo || priceTo === "all") &&
                (cityArea === area.key || cityArea === "all")
            );
        });

        setFilteredStudios(studiosList);
    }, [setFilteredStudios, filterFields, studios]);

    return (
        <div>
            {filteredStudios.length ? (
                filteredStudios.map((studio: IStudio) => (
                    <CatalogItem
                        key={studio.id}
                        price="od 20zł/h"
                        studioData={studio}
                        onHoverStudio={dispatchHoveredStudio}
                        hoverdStudioId={hoverdStudioId}
                        onItemClick={handleItemClick}
                    />
                ))
            ) : (
                <>Studios not found...</>
            )}
        </div>
    );
};
