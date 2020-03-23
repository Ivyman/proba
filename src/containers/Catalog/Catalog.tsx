import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "@src/hooks/dispatch";
import { useFilterStudios } from "@src/hooks/filterStudios";
import { IFieldsData } from "@src/types/filters";
import { IStudio } from "@src/types/studio";
import { setHoveredStudio, setOpenedStudio } from "@src/store/studios/actions";
import { getStudios, getHoveredStudioId } from "@src/store/studios/selectors";
import { getFilterFields } from "@src/store/filters/selectors";
import * as ROUTERS from "@src/config/router";

import CatalogItem from "@src/components/CatalogItem";

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

    const filteredStudios = useFilterStudios(studios, filterFields);

    const handleItemClick = useCallback(
        (studioId: string) => {
            dispatchOpenedStudio(studioId);
            history.push(`${ROUTERS.CATALOG}/${studioId}`);
        },
        [dispatchOpenedStudio, history],
    );

    return (
        <div>
            {filteredStudios.length ? (
                filteredStudios.map((studio: IStudio) => (
                    <CatalogItem
                        key={studio.id}
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
