import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "@src/hooks/dispatch";
import { IStudio } from "@src/types/studio";
import { setHoveredStudio, setOpenedStudio } from "@src/store/studios/actions";
import { getStudios, getHoverdStudioId } from "@src/store/studios/selectors";

import CatalogItem from "@src/components/CatalogItem";

export const Catalog: React.FC = () => {
    const studios: IStudio[] = useSelector(getStudios);
    const hoverdStudioId: string = useSelector(getHoverdStudioId);

    const dispatchHoveredStudio = useDispatch<typeof setHoveredStudio, string>(
        setHoveredStudio,
    );
    const dispatchOpenedStudio = useDispatch<typeof setOpenedStudio, string>(
        setOpenedStudio,
    );

    return (
        <div>
            {studios.length ? (
                studios.map((studio: IStudio) => (
                    <CatalogItem
                        key={studio.id}
                        studioData={studio}
                        onHoveredStudio={dispatchHoveredStudio}
                        onOpenStudio={dispatchOpenedStudio}
                        hoverdStudioId={hoverdStudioId}
                    />
                ))
            ) : (
                <>Studios not found...</>
            )}
        </div>
    );
};
