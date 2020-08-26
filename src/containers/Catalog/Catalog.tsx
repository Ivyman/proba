import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IFieldsData } from "@src/types/filters";
import { IStudio } from "@src/types/studio";
import {
    setHoveredStudio,
    setOpenedStudio,
    setFilteredStudiosAmount,
} from "@src/store/studios/actions";
import { getStudios, getHoveredStudioId } from "@src/store/studios/selectors";
import { getFilterFields } from "@src/store/filters/selectors";
import useFilters from "@src/hooks/useFilters";
import useDispatch from "@src/hooks/useDispatch";
import * as ROUTERS from "@src/config/router";

import CatalogItem from "@src/components/CatalogItem";
import CatalogItemsList from "@src/components/CatalogItemsList";

export const Catalog: React.FC = () => {
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
    const dispatchFilteredStudiosAmout = useDispatch<
        typeof setFilteredStudiosAmount,
        number
    >(setFilteredStudiosAmount);

    const filteredStudios = useFilters(studios, filterFields);

    const handleItemClick = useCallback(
        (studioId: string) => {
            dispatchOpenedStudio(studioId);
            history.push(`${ROUTERS.CATALOG}/${studioId}`);
        },
        [dispatchOpenedStudio, history],
    );

    useEffect(() => {
        if (filteredStudios)
            dispatchFilteredStudiosAmout(filteredStudios.length);
    }, [dispatchFilteredStudiosAmout, filteredStudios]);

    return (
        <CatalogItemsList>
            {filteredStudios.length ? (
                filteredStudios.map((studio: IStudio) => (
                    <CatalogItem
                        key={studio.id}
                        studioData={studio}
                        hoverdStudioId={hoverdStudioId}
                        onHoverStudio={dispatchHoveredStudio}
                        onItemClick={handleItemClick}
                    />
                ))
            ) : (
                <>Studios not found...</>
            )}
        </CatalogItemsList>
    );
};
