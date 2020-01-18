import React, { MouseEvent, useState, memo } from "react";
import { Link } from "react-router-dom";
import { IStudio } from "@src/types/studio";

export const CatalogItem: React.FC<{
    studioData: IStudio;
    onHoveredStudio: (id?: string) => void;
    onOpenStudio: (id?: string) => void;
}> = memo(({ studioData, onHoveredStudio, onOpenStudio }) => {
    const [hover, setHover] = useState();

    const handleClick = () => {
        onHoveredStudio();
        onOpenStudio(studioData.id);
    };
    const handleMouseOver = (event: MouseEvent, studioId: string) => {
        if (hover === event.currentTarget) {
            return;
        }
        setHover(event.currentTarget);
        onHoveredStudio(studioId);
    };

    const handleMouseLeave = () => {
        setHover(null);
        onHoveredStudio();
    };

    const {
        id,
        address: { city, zipcode, street },
        name,
        logo,
    } = studioData;

    return (
        <div
            onMouseOver={(event: any) => handleMouseOver(event, studioData.id)}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleClick()}
        >
            <Link to={`/catalog/${id}`}>
                {logo && <img src={logo} alt="" />}
                <h1>{name}</h1>
                <p>
                    {city}, {zipcode}, {street}
                </p>
            </Link>
        </div>
    );
});
