import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IFieldsData } from "@typing/filters";
import { IStudio } from "@typing/studio";
import {
    setHoveredStudio,
    setOpenedStudio,
    setFilteredStudiosAmount,
} from "@store/studios/actions";
import { getStudios, getHoveredStudioId } from "@store/studios/selectors";
import { getFilterFields } from "@store/filters/selectors";
import useFilters from "@hooks/useFilters";
import useDispatch from "@hooks/useDispatch";
import * as ROUTERS from "@config/router";

import CatalogItem from "@components/dump/CatalogItem";
import CatalogItemsList from "@components/dump/CatalogItemsList";

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
