import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "@src/hooks/dispatch";
import { IStudio } from "@src/types/studio";
import { setHoveredStudio, setOpenedStudio } from "@src/store/studios/actions";
import { getStudios, getHoveredStudioId } from "@src/store/studios/selectors";

import CatalogItem from "@src/components/CatalogItem";

export const Catalog: React.FC = () => {
    const history = useHistory();

    const studios: IStudio[] = useSelector(getStudios);
    const hoverdStudioId: string = useSelector(getHoveredStudioId);

    const dispatchHoveredStudio = useDispatch<typeof setHoveredStudio, string>(
        setHoveredStudio,
    );
    const dispatchOpenedStudio = useDispatch<typeof setOpenedStudio, string>(
        setOpenedStudio,
    );

    const handleItemClick = (studioId: string) => {
        dispatchOpenedStudio(studioId);
        history.push(`/catalog/${studioId}`);
    };

    return (
        <div>
            {studios.length ? (
                studios.map((studio: IStudio) => (
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
